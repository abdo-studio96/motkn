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
- Product imagery is drawn as inline SVG (`src/components/ProductArt.jsx`) so the page works offline. To use photos, add an `image` URL to a product in `src/data.js`.
