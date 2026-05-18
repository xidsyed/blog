# Quartz to Astro Migration Plan

Source: `../acqcc`  
Target: `../acqcc-astro`  
Package manager: Bun

## Checklist

- [x] Inspect the Quartz content tree and configuration.
- [x] Check current Quartz, Astro, Astro images, and Cloudflare Wrangler docs.
- [x] Scaffold a sibling Astro project with Bun.
- [x] Add formatting, linting, type checking, sitemap, and Wrangler dependencies.
- [x] Migrate Markdown into Astro content collections.
- [x] Convert Quartz/Obsidian image embeds and wikilinks.
- [x] Build Astro layouts and section indexes for blog posts and LeetCode notes.
- [x] Add Cloudflare Workers/Wrangler configuration.
- [x] Run format, lint, type check, and production build.
- [x] Deploy with Wrangler, unless setup blocks it.

## Migration Shape

- `content/posts/*.md` and `content/thoughts/*.md` become `src/content/blog/*.md`.
- `content/leetcode/*.md` becomes `src/content/leetcode/*.md`, except MOC files.
- Root evergreen pages like `resume.md`, `Newzle.md`, and `peek/*.md` become `src/content/pages`.
- Attachments and other media move to `src/assets/content` so Astro can optimize Markdown images and `<Image>` usage.
- `content/templates`, `content/tags`, Obsidian metadata, generated backups, and MOC files are left out of the migrated publishing surface.

## Compatibility Notes

- Obsidian image embeds become standard Markdown images with relative paths into `src/assets/content`.
- Standard wikilinks become normal Markdown links to the generated Astro routes.
- Non-image transclusions and block references are converted to plain links or omitted when there is no direct Astro equivalent.
- Listing pages use Astro content collections and the built-in `<Image>` component for cover/profile assets.
