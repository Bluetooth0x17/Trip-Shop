module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Remplacez par les domaines d'images autorisés
  },
  env: {
    API_URL: process.env.API_URL, // URL de l'API pour les requêtes
  },
};