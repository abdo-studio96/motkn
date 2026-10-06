# سوق الحطب — Firewood Market

Public landing page (frontend demo) for a Saudi marketplace connecting firewood and charcoal suppliers with individual and business buyers.

**Stack:** React 19 · Vite · Tailwind CSS v4. Arabic content, RTL layout.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Notes
- All products, suppliers, prices and verification badges are **sample data** (`src/data.js`) and are labelled as demo in the UI.
- No backend: search/category filters, product preview modal and the supplier interest form run entirely in the browser. The form sends nothing.
- Product, category and hero photos are AI-generated demo images (Higgsfield), referenced by URL in `src/data.js` (`PHOTOS`). If a photo fails to load, an inline SVG illustration (`src/components/ProductArt.jsx`) is shown instead. For production, copy the photos into `public/images/` and update the URLs.
