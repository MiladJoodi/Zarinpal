'use client'
import { useEffect } from 'react'

export default function RegisterSW() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none',
      })
      .then((reg) => {
        console.log('SW registered', reg);
      })
      .catch((err) => {
        console.warn('SW registration failed', err);
      });
    }
  }, []);

  return null;
}
