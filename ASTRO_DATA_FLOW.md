# Astro Data Flow in This Project

This is a project-specific map of how data flows in your Astro site, written at the same level as your tutorial notes.

## 1) Content source -> typed collections

Your real content lives in markdown under:

- `src/content/blog/**`
- `src/content/leetcode/**`
- `src/content/pages/**`

The contract is defined in `src/content.config.ts`:

- each collection is declared with `defineCollection(...)`
- each markdown frontmatter is validated by `entrySchema`
- `cover` uses `image()` so Astro treats it as an optimized image asset
- `hideCover` lets a page opt out of hero cover rendering

So the first step in data flow is:

`Markdown file + frontmatter -> validated typed entry object`

---

## 2) Route files decide what data to load

Astro pages are route handlers. In this project:

- `src/pages/index.astro` -> `/`
- `src/pages/blog/index.astro` -> `/blog/`
- `src/pages/leetcode/index.astro` -> `/leetcode/`
- `src/pages/blog/[...slug].astro` -> each blog post page
- `src/pages/leetcode/[...slug].astro` -> each leetcode entry page
- `src/pages/[...slug].astro` -> general pages like `/resume/`, `/newzle/`, etc.

Index pages call `getCollection(...)` and usually sort:

- blog index sorts by date desc
- leetcode index sorts by title

Home page does both:

- loads `pages/home` via `getEntry("pages", "home")`
- loads blog list via `getCollection("blog")`

So second step is:

`Route file -> query entries (getCollection/getEntry) -> pass to layout/components`

---

## 3) Dynamic routes: getStaticPaths + render

For detail pages (`[...slug].astro` files), flow is:

1. `getStaticPaths()` fetches a collection
2. one URL path is generated per entry (`params.slug = entry.id`)
3. route receives `entry` in `Astro.props`
4. `render(entry)` converts markdown to a renderable `Content` component
5. page renders `<Content />` inside `ContentLayout`

So third step is:

`entry markdown -> static path generated -> markdown rendered -> HTML page`

---

## 4) Layout/component layer: where UI gets composed

### Base shell
`src/layouts/BaseLayout.astro` provides:

- document/head metadata
- site header/nav
- global typography and prose styles

### Content page wrapper
`src/layouts/ContentLayout.astro` provides:

- date/title header
- optional hero cover (`cover` + `coverAlt`, skipped when `hideCover: true`)
- spacing and hero image behavior
- slot for markdown body

### Reusable list UI
`src/components/EntryList.astro` receives:

- `entries` (blog or leetcode)
- `basePath` (`/blog` or `/leetcode`)

Then maps each entry to card UI + links + optional cover + tags.

So fourth step is:

`typed entry data -> props -> layout/components -> final HTML`

---

## 5) Asset flow (important)

Recommended flow used here:

- post/page images are in `src/assets/**` and referenced in markdown/frontmatter
- cover images are frontmatter `cover: ../../assets/...`
- Astro optimizes these during build (`astro:assets`)

When you need a direct URL asset (example: raw `<video>` in markdown):

- keep file in `public/**` (here: `/media/...`)
- reference by absolute URL like `/media/attachments/mixedwashdemo.mkv`

Rule of thumb:

- use `src/assets` for images you want Astro to optimize
- use `public` for direct static file serving

---

## 6) Build-time mental model (SSG in this project)

When you run `astro build`, Astro:

1. reads all route files
2. runs collection queries
3. runs `getStaticPaths()` for dynamic routes
4. renders markdown + layouts to HTML
5. emits static output in `dist/` (+ optimized images)

That means this site is mostly pre-built pages, not runtime-fetched content.

---

## Practical debug checklist

If a post/page is missing:

1. confirm markdown file is in the right `src/content/<collection>/` folder
2. confirm frontmatter matches schema in `src/content.config.ts`
3. confirm route file uses the same collection name in `getCollection(...)`
4. for detail pages, confirm `[...slug].astro` `getStaticPaths()` includes that entry
5. run `bun run build` and check errors from content validation

