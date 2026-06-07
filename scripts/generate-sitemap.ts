import fs from "node:fs/promises";
import path from "node:path";
import fg from "fast-glob";
import matter from "gray-matter";

const siteUrl = "https://damienhensen.nl";
const outputPath = "public/sitemap.xml";

type Route = {
  loc: string;
  changeFreq: string;
  priority: string;
  lastMod?: string;
};

const routes: Route[] = [
  { loc: "/", changeFreq: "monthly", priority: "1.0" },
  { loc: "/about/", changeFreq: "monthly", priority: "0.8" },
  { loc: "/blog/", changeFreq: "monthly", priority: "0.9" },
  { loc: "/projects/", changeFreq: "monthly", priority: "0.9" },
];

const blogDir = "content/blog";
const projectDir = "content/projects";

const blogFiles = await fg(`${blogDir}/**/*.md`);
const projectFiles = await fg(`${projectDir}/**/*.md`);

await Promise.all([
  ...blogFiles.map(async (file) => {
    const raw = await fs.readFile(file, "utf-8");
    const { data } = matter(raw);

    const slug = path.basename(file, ".md");

    routes.push({
      loc: `/blog/${slug}/`,
      changeFreq: "monthly",
      lastMod: data.updated ?? data.date,
      priority: "0.7",
    });
  }),
  ...projectFiles.map(async (file) => {
    const raw = await fs.readFile(file, "utf-8");
    const { data } = matter(raw);

    const slug = path.basename(file, ".md");

    routes.push({
      loc: `/projects/${slug}/`,
      changeFreq: "monthly",
      lastMod: data.updated ?? data.date,
      priority: "0.8",
    });
  }),
]);

const uniqueRoutes = [...new Map(routes.map((r) => [r.loc, r])).values()];
uniqueRoutes.sort((a, b) => a.loc.localeCompare(b.loc));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes
  .map(
    (route) => `   <url>
        <loc>${siteUrl}${route.loc}</loc>
        <lastmod>${new Date(route.lastMod ?? new Date()).toISOString().split("T")[0]}</lastmod>
        <changefreq>${route.changeFreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>`,
  )
  .join("\n")}
</urlset>
`;

await fs.mkdir("public", { recursive: true });
await fs.writeFile(outputPath, sitemap.trim());

console.log(`Sitemap generated at ${outputPath}`);
