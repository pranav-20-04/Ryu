export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/watch/',
        '/catalog',
        '/profile',
        '/api/'
      ],
    },
    sitemap: 'https://Ryu-anime.vercel.app/sitemap.xml',
  }
}