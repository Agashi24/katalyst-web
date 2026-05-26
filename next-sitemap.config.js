/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://katalyst-web.vercel.app", // Ganti dengan domain Vercel Anda
  generateRobotsTxt: true, // Otomatis buat robots.txt
};
