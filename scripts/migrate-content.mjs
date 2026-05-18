import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const root = path.resolve("..", "acqcc", "content");
const destRoot = path.resolve("src", "content");
const assetRoot = path.resolve("src", "assets", "content");

const imageExts = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".svg",
  ".webp",
]);
const mediaExts = new Set([...imageExts, ".mkv", ".mp4", ".webm", ".mov"]);
const ignoredDirs = new Set([".obsidian", "templates", "tags"]);
let assetRelSet = new Set();

const slugify = (value) =>
  value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const toPosix = (value) => value.split(path.sep).join("/");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".") && entry.name !== ".obsidian") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) files.push(...(await walk(full)));
      continue;
    }
    files.push(full);
  }

  return files;
}

function classify(relPath) {
  const parts = relPath.split(path.sep);
  const filename = parts.at(-1) ?? "";

  if (!filename.endsWith(".md")) return null;
  if (filename.toLowerCase().includes("moc")) return null;
  if (filename === "index.md" || filename === "_index.md") {
    if (parts.length === 1 && filename === "_index.md") return "pages";
    return null;
  }

  if (parts[0] === "posts" || parts[0] === "thoughts") return "blog";
  if (parts[0] === "leetcode") return "leetcode";
  if (parts[0] === "peek") return "pages";
  if (parts.length === 1) return "pages";

  return null;
}

function outputRel(relPath, collection) {
  const basename = path.basename(relPath, ".md");
  const slug = basename === "_index" ? "home" : slugify(basename);

  if (collection === "pages" && relPath.startsWith(`peek${path.sep}`)) {
    return path.join("pages", "peek", `${slug}.md`);
  }

  return path.join(collection, `${slug}.md`);
}

function routeFor(relPath, collection) {
  const out = outputRel(relPath, collection);
  const id = toPosix(out)
    .replace(/^blog\//, "")
    .replace(/^leetcode\//, "")
    .replace(/^pages\//, "")
    .replace(/\.md$/, "");

  if (collection === "pages" && path.basename(relPath) === "_index.md")
    return "/";
  if (collection === "blog") return `/blog/${id}/`;
  if (collection === "leetcode") return `/leetcode/${id}/`;
  return `/${id}/`;
}

function buildRouteMap(markdownFiles) {
  const routes = new Map();

  for (const file of markdownFiles) {
    const rel = path.relative(root, file);
    const collection = classify(rel);
    if (!collection) continue;

    const route = routeFor(rel, collection);
    const withoutExt = toPosix(rel).replace(/\.md$/, "");
    const base = path.basename(rel, ".md");
    const parsed = matter.read(file);
    const aliases = Array.isArray(parsed.data.aliases)
      ? parsed.data.aliases
      : [];

    for (const key of [withoutExt, base, parsed.data.title, ...aliases].filter(
      Boolean,
    )) {
      routes.set(String(key).toLowerCase(), route);
    }
  }

  routes.set("resume", "/resume/");
  routes.set("newzle", "/newzle/");
  routes.set("tags/android", "/tags/android/");
  routes.set("tags/philosophy", "/tags/philosophy/");
  return routes;
}

function normalizeImagePath(rawPath, sourceDirRel) {
  const clean = rawPath.replace(/\\\|/g, "|").replace(/^\/+/, "");
  const candidates = [];

  candidates.push(clean);
  if (!clean.includes("/"))
    candidates.push(path.posix.join(sourceDirRel, clean));
  if (!clean.includes("/"))
    candidates.push(path.posix.join("attachments", clean));
  if (!clean.includes("/"))
    candidates.push(path.posix.join(sourceDirRel, "attachments", clean));

  for (const candidate of candidates) {
    const ext = path.extname(candidate).toLowerCase();
    if (!mediaExts.has(ext)) continue;
    if (!assetRelSet.has(candidate)) continue;
    return candidate;
  }

  return clean;
}

function relativeAssetPath(sourceRel, outputRelPath, target) {
  const normalizedTarget = normalizeImagePath(
    target,
    path.posix.dirname(toPosix(sourceRel)),
  );
  const absoluteAsset = path.join(assetRoot, ...normalizedTarget.split("/"));
  const outputDir = path.dirname(path.join(destRoot, outputRelPath));
  return toPosix(path.relative(outputDir, absoluteAsset));
}

function publicAssetPath(sourceRel, target) {
  const normalizedTarget = normalizeImagePath(
    target,
    path.posix.dirname(toPosix(sourceRel)),
  );
  return `/content/${normalizedTarget}`;
}

function headingSlug(value) {
  return slugify(value.replace(/\^[a-z0-9-]+$/i, ""));
}

function wikilinkHref(target, routes) {
  const [rawPage, rawHeading] = target.split("#");
  const page = rawPage.trim();
  const route = routes.get(page.toLowerCase()) ?? `/${slugify(page)}/`;
  const heading = rawHeading ? `#${headingSlug(rawHeading)}` : "";
  return `${route}${heading}`;
}

function convertBody(body, sourceRel, outputRelPath, routes) {
  let converted = body;

  converted = converted.replace(/!\[\[([^\]]+)\]\]/g, (_, inner) => {
    const [rawTarget, rawSize] = inner.replace(/\\\|/g, "|").split("|");
    const target = rawTarget.trim();
    const ext = path.extname(target).toLowerCase();

    if (imageExts.has(ext)) {
      const src = relativeAssetPath(sourceRel, outputRelPath, target);
      const alt = path.basename(target, ext).replace(/[-_]+/g, " ");
      const title = rawSize ? ` "${rawSize.trim()}px"` : "";
      return `![${alt}](${src}${title})`;
    }

    if (mediaExts.has(ext)) {
      const src = relativeAssetPath(sourceRel, outputRelPath, target);
      return `<video src="${src}" controls playsinline></video>`;
    }

    return `[${target.replace(/#.*$/, "")}](${wikilinkHref(target, routes)})`;
  });

  converted = converted.replace(/\[\[([^\]]+)\]\]/g, (_, inner) => {
    const [target, label] = inner.replace(/\\\|/g, "|").split("|");
    const text = (label ?? target.split("#")[0]).trim();
    return `[${text}](${wikilinkHref(target.trim(), routes)})`;
  });

  converted = converted.replace(
    /\b(src|href)="([^":#][^"]*\.(?:webp|png|jpe?g|gif|svg|mkv|mp4|webm|mov))"/gi,
    (_match, attr, value) => {
      const src = publicAssetPath(sourceRel, value);
      return `${attr}="${src}"`;
    },
  );

  converted = converted.replace(/^\^[a-z0-9-]+\s*$/gim, "");
  converted = converted.replace(/\]\(\/posts\/?\)/g, "](/blog/)");

  return converted;
}

function normalizeData(data, sourceRel, outputRelPath) {
  const normalized = {
    title: data.title || path.basename(sourceRel, ".md"),
  };

  if (data.date) normalized.date = data.date;
  if (data.summary) normalized.description = data.summary;

  const tags = Array.isArray(data.tags)
    ? data.tags
    : typeof data.tags === "string" && data.tags.trim()
      ? [data.tags.trim()]
      : [];
  normalized.tags = tags.filter((tag) => tag && tag !== "Untagged");

  if (data.image?.src) {
    const coverTarget = normalizeImagePath(
      data.image.src,
      path.posix.dirname(toPosix(sourceRel)),
    );
    if (assetRelSet.has(coverTarget)) {
      normalized.cover = relativeAssetPath(
        sourceRel,
        outputRelPath,
        data.image.src,
      );
      if (data.image.alt) normalized.coverAlt = data.image.alt;
    }
  }

  return normalized;
}

async function copyAssets(files) {
  await fs.rm(assetRoot, { recursive: true, force: true });
  await fs.rm(path.resolve("public", "content"), {
    recursive: true,
    force: true,
  });

  for (const file of files) {
    const rel = path.relative(root, file);
    if (file.endsWith(".md")) continue;
    if (rel.includes(`${path.sep}.obsidian${path.sep}`)) continue;
    if (path.basename(rel).endsWith(".bak")) continue;

    const dest = path.join(assetRoot, rel);
    const publicDest = path.join("public", "content", rel);
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.mkdir(path.dirname(publicDest), { recursive: true });
    await fs.copyFile(file, dest);
    await fs.copyFile(file, publicDest);
  }
}

async function main() {
  const files = await walk(root);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  assetRelSet = new Set(
    files
      .filter((file) => !file.endsWith(".md"))
      .map((file) => toPosix(path.relative(root, file))),
  );
  const routes = buildRouteMap(markdownFiles);

  await fs.rm(destRoot, { recursive: true, force: true });
  await fs.mkdir(destRoot, { recursive: true });
  await copyAssets(files);

  let migrated = 0;
  let skipped = 0;

  for (const file of markdownFiles) {
    const rel = path.relative(root, file);
    const collection = classify(rel);
    if (!collection) {
      skipped += 1;
      continue;
    }

    const outRel = outputRel(rel, collection);
    const parsed = matter.read(file);
    const data = normalizeData(parsed.data, rel, outRel);
    const content = convertBody(parsed.content, rel, outRel, routes);
    const output = matter.stringify(content.trimStart(), data);
    const dest = path.join(destRoot, outRel);

    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.writeFile(dest, output);
    migrated += 1;
  }

  console.log(`Migrated ${migrated} markdown files; skipped ${skipped}.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
