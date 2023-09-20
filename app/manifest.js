export default function manifest() {
    return {
        name: "Jakes",
        short_name: "Jake",
        description: 'Next.js App',
        start_url: '/',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon'
              },
              {
                src: '/apple-touch-icon.png',
                sizes: 'any',
                type: 'apple-touch-icon'
              },
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable"
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            }
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone"
    }
  }
  