export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://portfolio-celeste.vercel.app/sitemap.xml",
    host: "https://portfolio-celeste.vercel.app",
  };
}
