# Quartz to Astro Migration Write-up

## Short Summary

This project was migrated from a Quartz + Obsidian-flavored Markdown setup to an Astro static site using Bun.  
Content is now organized with Astro content collections, section pages are generated from those collections, and deployment runs through Cloudflare Wrangler.

## Migration Approach

1. Create a clean Astro project in a sibling directory (`blog`) using Bun.
2. Add core tooling: content collections, linting, formatting, type checks, sitemap, and Wrangler deploy.
3. Build a repeatable migration script (`scripts/migrate-content.mjs`) instead of doing manual copy/paste.
4. Move content into explicit sections:
   - `posts/` + `thoughts/` -> `src/content/blog/`
   - `leetcode/` -> `src/content/leetcode/` (MOC files skipped)
   - root/other pages (`resume`, `Newzle`, `peek`) -> `src/content/pages/`
5. Convert Obsidian syntax (wikilinks and embeds) into Astro-friendly Markdown links and asset paths.
6. Keep media available in both:
   - `src/assets/content/` (for Astro image pipeline)
   - `public/content/` (for raw HTML/video refs)
7. Implement routes/layouts for blog, leetcode, pages, and tags.
8. Validate with format + lint + `astro check` + production build, then deploy to Wrangler.

## Important Implementation Details

- Content schema and loaders are defined in [src/content.config.ts](/home/shiba/Documents/code/blog/src/content.config.ts).
- Migration logic is centralized in [scripts/migrate-content.mjs](/home/shiba/Documents/code/blog/scripts/migrate-content.mjs).
- Page structure:
  - Home: [src/pages/index.astro](/home/shiba/Documents/code/blog/src/pages/index.astro)
  - Blog listing/detail: [src/pages/blog/index.astro](/home/shiba/Documents/code/blog/src/pages/blog/index.astro), [src/pages/blog/[...slug].astro](/home/shiba/Documents/code/blog/src/pages/blog/[...slug].astro)
  - LeetCode listing/detail: [src/pages/leetcode/index.astro](/home/shiba/Documents/code/blog/src/pages/leetcode/index.astro), [src/pages/leetcode/[...slug].astro](/home/shiba/Documents/code/blog/src/pages/leetcode/[...slug].astro)
  - Generic page entries: [src/pages/[...slug].astro](/home/shiba/Documents/code/blog/src/pages/[...slug].astro)
  - Tag pages: [src/pages/tags/[tag].astro](/home/shiba/Documents/code/blog/src/pages/tags/[tag].astro)
- Shared layout/components:
  - [src/layouts/BaseLayout.astro](/home/shiba/Documents/code/blog/src/layouts/BaseLayout.astro)
  - [src/layouts/ContentLayout.astro](/home/shiba/Documents/code/blog/src/layouts/ContentLayout.astro)
  - [src/components/EntryList.astro](/home/shiba/Documents/code/blog/src/components/EntryList.astro)
- Deployment config: [wrangler.jsonc](/home/shiba/Documents/code/blog/wrangler.jsonc)

## What Still Needs Cleanup

- Some Obsidian-specific edge cases were simplified (for example block references/transclusions that do not map 1:1 to Astro behavior).
- Tag quality is inherited from source metadata; tag naming is inconsistent (`tbdone`, `tododryrun`, etc.) and should be normalized.
- Styling is functional and clean but still a first pass; visual polish and IA refinements can be improved.
- Generated files are many; if preferred, reduce repo size strategy (for example, whether both `src/assets/content` and `public/content` should be kept long-term).

## What Must Be Verified

- Internal links across migrated pages:
  - blog <-> pages links
  - leetcode cross-links
  - tag links
- Media rendering behavior:
  - Markdown images
  - inline HTML `<img>` references
  - video embeds (especially browser format support for `.mkv`)
- Route expectations:
  - old `/posts` links now point to `/blog`
  - pages like `/resume`, `/newzle`, `/peek/lies` resolve correctly
- Deployment expectations:
  - Wrangler project/domain bindings
  - final production URL and DNS behavior

## What a Developer Should Understand (Astro Basics)

- Astro content collections are the source of truth for content typing and discovery.
- Collection entries are loaded at build time and converted into static routes using `getStaticPaths`.
- `astro:assets` optimizes imported images from `src/assets`.
- `public/` files are served directly and are useful when raw HTML content needs absolute static paths.
- The migration script is intended to be rerunnable. If source content changes, run:
  - `bun run migrate`
  - `bun run check`
  - `bun run build`

## Current Operational Commands

```bash
bun run migrate
bun run format
bun run lint
bun run check
bun run build
bun run deploy
```
