import fs from "node:fs/promises";
import path from "node:path";
import fg from "fast-glob";
import matter from "gray-matter";

const siteUrl = "https://damienhensen.nl";
const blogDir = "content/blog";
const outputPath = "public/rss.xml";

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const files = await fg(`${blogDir}/**/*.md`);

const posts = await Promise.all(
  files.map(async (file) => {
    const raw = await fs.readFile(file, "utf-8");
    const { data } = matter(raw);

    const slug = path.basename(file, ".md");

    return {
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date,
      url: `${siteUrl}/blog/${slug}`,
    };
  }),
);

const sortedPosts = posts
  .filter((post) => post.date)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const items = sortedPosts
  .map(
    (post) => `
    <item>
        <title>${escapeXml(post.title)}</title>
        <link>${post.url}</link>
        <guid>${post.url}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description>${escapeXml(post.description)}</description>
    </item>`,
  )
  .join("");

const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>Damien Hensen Blog</title>
        <link>${siteUrl}</link>
        <description>Notes from projects, experiments, and things I've learned along the way.</description>
        <language>en-gb</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link
          href="${siteUrl}/rss.xml"
          rel="self"
          type="application/rss+xml" />
        ${items}
    </channel>
</rss>`;

await fs.mkdir("public", { recursive: true });
await fs.writeFile(outputPath, rss.trim());

console.log(`RSS feed generated at ${outputPath}`);
