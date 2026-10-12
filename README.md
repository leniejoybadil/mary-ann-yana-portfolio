# Mary Ann C. Yana | Portfolio

A responsive React + Vite portfolio scaffold using an elegant blush-pink and cream visual system.

## Requirements
- Node.js (LTS version)
- VS Code

## Run locally
1. Extract the ZIP folder.
2. Open the extracted `mary_ann_yana_portfolio` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build check
```bash
npm run build
```

## Add the photos and certificates
Create an `assets` folder inside `public`, then add:
- `public/assets/ME1.jpg` — portrait
- `public/assets/ME2.jpg` — full-body / secondary portrait
- `public/assets/CERT1.jpg` through `CERT8.jpg` — certificate images
- `public/assets/SK1.jpg` through `SK4.jpg` — SK activity photos

You can use `.png`, `.jpg`, `.jpeg`, or `.webp`. When you receive the files, update the placeholder blocks in `src/main.jsx` to use image elements, for example:
```jsx
<img src="/assets/ME1.jpg" alt="Mary Ann Yana portrait" />
```
For PDFs, use a direct link to the PDF file instead of an image element. Confirm certificate names and dates from each file rather than guessing.

## Publish using GitHub + Render
1. Create a GitHub repository, e.g. `mary-ann-yana-portfolio`.
2. Upload the project files to the repository (do not upload `node_modules`).
3. In Render, choose **New + → Static Site** and connect the GitHub repository.
4. Use:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Click **Create Static Site** and wait for the deploy to finish.
6. Render will provide a public `onrender.com` URL.

## Notes before publishing
- Replace all photo placeholders with the real image assets.
- Confirm certificate titles, issuing organizations, and dates from the actual certificates.
- Review SK captions against the actual SK photos.
- Confirm that Mary Ann agrees to display her phone number and location publicly.
- The bio, education, leadership roles, and projects in this scaffold are based on the supplied two-page profile PDF. Some project wording has been summarized for website readability.
