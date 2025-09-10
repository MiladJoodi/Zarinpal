// public/sw.js
const CACHE_NAME = 'zarinpall-cache-v1';
const ASSETS = [
  '/',
  '/offline.html',
  '/favicon.ico',
  '/icon/icon-192x192.png',
  '/icon/icon-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        // update cache in background
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
        return res;
      })
      .catch(() =>
        caches.match(event.request).then((cached) => cached || caches.match('/offline.html'))
      )
  );
});

// optional: push + notification handlers (اگر نیاز داری بعدا اضافه می‌کنیم)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: data.icon || '/icon/icon-192x192.png',
      badge: '/icon/icon-192x192.png',
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});
