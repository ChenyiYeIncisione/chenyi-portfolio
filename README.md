# CHENYI YE — Digital Craft Archive

A Next.js starter portfolio with a dark gallery homepage and a light museum-style archive.

## Run locally

1. Install Node.js 20+.
2. Open a terminal in this folder.
3. Run `npm install` and then `npm run dev`.
4. Open http://localhost:3000.

## Edit your works

- Open `app/data.ts` and replace the four DEMO records with your verified work titles, materials, techniques, dates and your actual role.
- Add images in `public/media/` with the matching file names or update the paths in `app/data.ts`.
- To add a process video, place an MP4 in `public/media/` and set a work's `video` property to `/media/your-video.mp4`.
- Replace the placeholder contact email in `app/layout.tsx`.
- Add a real PDF at `public/chenyi-ye-cv.pdf`; the About page has a link prepared for it.
- Do not publish demo records or placeholder email as real professional information.

## GitHub + Vercel

Create a GitHub repository, upload these files (not `node_modules`), then import the repository at vercel.com/new. Use the default Next.js framework settings. The first build will run after installing dependencies.

## Notes

Images are intentionally absent until original artwork photography is provided; neutral placeholders appear automatically. No image is represented as Chenyi Ye's actual work. The website has not been deployed or runtime-tested in this environment.


## V2.4 museum homepage
Navigation: Works / Craftsmanship / About (CV and contact are consolidated under About).
Replace placeholder image files in `public/media/` with original photographs.
The CV and contact information are intentionally not linked until confirmed.
