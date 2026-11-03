# CHENYI YE — Digital Craft Archive V2.8

A deployable Next.js portfolio inspired by the approved warm-parchment editorial concept.

## Deploy to your existing GitHub + Vercel site

1. Download and unzip this archive.
2. Open your existing GitHub repository: https://github.com/ChenyiYeIncisione/chenyi-portfolio
3. **Back up your existing files first** (download the repository as ZIP, or create a backup branch).
4. Replace the root files (`package.json`, `tsconfig.json`, `next-env.d.ts`, `.gitignore`) and the **entire `app/` folder** with the files in this ZIP. Upload `public/images/` too. Do not place the ZIP itself in the repository.
5. Commit changes to the branch Vercel deploys (usually `main`). Vercel should redeploy automatically. You can also run `npm install && npm run dev` locally.
6. If the old repository has a conflicting `pages/` directory, custom config or dependency lockfile, review it before overwriting; this package is intended as a standalone replacement.

## IMPORTANT: Image placeholders

The eight JPGs in `public/images/` are **cropped from the AI-generated visual mockup** and are illustrative placeholders, **not photos of Chenyi Ye's actual works**. Replace them with your own images **using the same filenames** to preserve the layout. The landscape and ornamental hero images are illustrative as well.

## Where to edit

- Homepage: `app/page.tsx`
- Works and Craftsmanship names/descriptions: `app/data.ts`
- About text and contact: `app/about/page.tsx`
- Fonts, colors, responsive design: `app/globals.css`
- Site title/navigation/footer: `app/layout.tsx`
- Replace `public/images/*.jpg` with your real work photos.

## Notes

Category pages are real navigable routes, but **individual artwork entries and downloadable CV are not yet populated** because artwork metadata, images, CV file and contact address have not been supplied. The category and process pages explicitly show placeholders rather than inventing your work history or artwork information.


## IMPORTANT: Updating an existing GitHub repository
This archive includes `app/components.tsx` specifically to replace the incompatible
V2.6 file still present in older repositories. Overwrite ALL matching files.
In GitHub, `public/images` must contain actual image files under the two nested
folders `public` and `images` (not a literal folder named `public/images`).
Do not simply add the new files while leaving old files with the same names.
If any old pages or files remain outside this archive, delete them or verify
that they do not introduce build errors.
