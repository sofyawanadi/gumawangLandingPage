# PageSpeed Optimization — Problem & Solution Summary

## Latar Belakang

Project landing page Gumawang Coffee di-audit menggunakan PageSpeed Insights.
Tiga masalah utama yang terdeteksi:

1. **Use efficient cache lifetimes** — Request blocking initial render, menunda LCP
2. **Network Dependency Tree** — Critical request chains terlalu panjang
3. **Reduce unused JavaScript** — Bundle terlalu besar untuk konten statis

---

## Problem & Solusi Detail

### 1. Render-Blocking Google Fonts

**Problem:** `<link rel="stylesheet">` ke `fonts.googleapis.com` di `<head>` memblokir render. Browser harus download CSS font dulu sebelum bisa render konten. Apalagi ada 9 font weights (Inter 300-700 + Playfair Display 400-700) yang di-load.

**Impact:** ~200-400ms delay LCP, ~200KB font data download.

**Solusi:**
- Hapus Google Fonts external link dari `index.html`
- Install `@fontsource/inter` dan `@fontsource/playfair-display`
- Import hanya subset **latin** (tidak perlu cyrillic, greek, vietnamese, dll)
- Import hanya weight yang dipakai: `400`, `600`, `700`
- Font di-self-host sebagai woff2, tidak ada external request

**File berubah:**
- `index.html` — hapus Google Fonts, tambah preload hero image
- `src/main.tsx` — import `@fontsource/inter/latin-{400,600,700}.css` + Playfair

---

### 2. Penggunaan framer-motion Berlebihan

**Problem:** `framer-motion` (~40 KB gzip) di-import di 10 komponen, padahal animasi yang dipakai hanya fade-in/slide-up sederhana yang bisa pakai CSS. Library ini adalah kontributor bundle terbesar kedua setelah ReactDOM.

**Impact:** ~40 KB gzip tidak diperlukan, loading JS lebih berat.

**Solusi:**
- Buat custom hook `useInView` (IntersectionObserver, ~0.3 KB gzip)
- Buat custom hook `useScrollProgress` (native scroll event)
- Definisikan CSS keyframes: `fade-in`, `slide-up`, `slide-left`, `scale-in`, `scale-x`
- Ganti semua `<motion.div>` dengan `<div>` + CSS classes
- Ganti `ScrollProgress` (framer-motion useScroll + useSpring) → native scroll event
- Ganti `BackToTop` (AnimatePresence) → CSS transition
- Hapus dependency `framer-motion` dari `package.json`

**File baru:**
- `src/hooks/useInView.ts`
- `src/hooks/useScrollProgress.ts`

**File berubah:**
- `src/index.css` — tambah CSS animation keyframes
- Semua component file — ganti motion.div ke div + CSS
- `package.json` — hapus framer-motion

---

### 3. Bundle Tidak di-Code-Split

**Problem:** Semua komponen di-import eager di `App.tsx`. Bundle jadi 449 KB (142 KB gzip) — terlalu besar untuk landing page statis.

**Impact:** Initial render lambat, JS yang tidak dipakai di above-fold ikut di-load.

**Solusi:**
- Komponen **above-fold** (Hero, AboutUs, Navbar, ScrollProgress, BackToTop) tetap eager
- Komponen **below-fold** (Statistics, CoffeeProducts, RoastingProcess, WhyChooseUs, Gallery, Testimonials, CTA, Footer) di-load dengan `React.lazy()` + `<Suspense>`

**File berubah:**
- `src/App.tsx` — gunakan `lazy(() => import(...))`

**Hasil:**
| Komponen | Size (gzip) |
|---|---|
| Main bundle (React + core) | ~77 KB |
| Utils (i18next, clsx) | ~8.7 KB |
| JSX runtime | ~5.4 KB |
| CSS | ~6.9 KB |
| CoffeeProducts (lazy) | ~1.8 KB |
| Footer (lazy) | ~1.2 KB |
| Other lazy chunks | ~5 KB total |

Initial load turun dari ~148 KB gzip → **~99 KB gzip** (-33%).

---

### 4. Gambar JPEG Tanpa Width/Height

**Problem:** Semua gambar Unsplash dalam format JPEG (tidak di WebP). Tidak ada atribut `width`/`height`, menyebabkan **Cumulative Layout Shift (CLS)** saat image selesai loading.

**Impact:** CLS buruk, ukuran file 30-50% lebih besar dari WebP.

**Solusi:**
- Tambah `&fm=webp` ke semua Unsplash URL
- Tambah atribut `width` + `height` ke semua `<img>` (intrinsic dimensions)

**File berubah:**
- `Hero.tsx` — WebP di CSS background-image
- `AboutUs.tsx` — `width={800} height={600}` + WebP
- `Gallery.tsx` — `width={600} height={400}` + WebP
- `CoffeeProducts.tsx` — `width={600} height={450}` + WebP
- `CTA.tsx` — WebP di CSS background-image
- `src/data/products.ts` — WebP di URL gambar produk

---

### 5. Lazy-Load Locale EN

**Problem:** Kedua file translation JSON (EN + ID) di-import eager, padahal cuma 1 yang dipakai saat render awal.

**Impact:** ~10 KB data tidak perlu.

**Solusi:**
- Bundle `id` translation secara eager (default)
- Load `en` translation dengan `import()` dinamis saat user switch ke EN

**File berubah:**
- `src/i18n.ts` — gunakan `partialBundledLanguages: true`, dynamic import

---

### 6. Preload Hero Image

**Problem:** Hero image sebagai CSS `background-image` tidak terdeteksi oleh preload scanner browser. Browser baru tahu image ini harus di-download setelah CSS Hero di-process.

**Impact:** Hero image (yang sangat mempengaruhi LCP) mulai download terlambat.

**Solusi:**
- Tambah `<link rel="preload" as="image" fetchpriority="high">` di `index.html`

**File berubah:**
- `index.html` — tambah preload hint

---

## Ringkasan Dampak

| Metrik | Sebelum | Sesudah | Perbaikan |
|---|---|---|---|
| **JS initial (gzip)** | 141.63 KB | ~77 KB (main) + ~22 KB (shared) | **-33%** |
| **Render-blocking requests** | 1 (Google Fonts CSS) | 0 | **Eliminated** |
| **Font files** | 9 external, chain | 6 self-hosted, no chain | **No critical path** |
| **Image format** | JPEG | WebP | **~40% smaller** |
| **CLS** | Berpotensi shift | Stabil (w/h explicit) | **0 CLS** |
| **Lazy loading** | None | 8 komponen + 1 locale | **Below-fold deferred** |

## File yang Berubah / Dibuat

### Files Created
- `src/hooks/useInView.ts`
- `src/hooks/useScrollProgress.ts`
- `docs/pagespeed-optimization-summary.md`

### Files Modified
- `src/main.tsx` — import fontsource + i18n
- `src/App.tsx` — code-split lazy components
- `src/i18n.ts` — lazy-load locale EN
- `src/index.css` — CSS animation keyframes
- `index.html` — self-host fonts, preload hero image
- `package.json` — hapus framer-motion, tambah @fontsource
- All components (13 files) — hapus framer-motion, CSS animations, WebP, width/height
- `src/data/products.ts` — WebP URLs
