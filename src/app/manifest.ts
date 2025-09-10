import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Zarinpall',
        short_name: 'Zarinpall',
        description: 'Zarinpall - example PWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0f172a',
        icons: [
            { src: '/icon/icon-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/icon/icon-512x512.png', sizes: '512x512', type: 'image/png' },
            { src: '/icon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ],
    }
}
