# PageSpeed Optimization Plan

## Goal
Fix 3 issues: render-blocking resources, critical request chains, unused JavaScript.

## Step 1: Replace framer-motion (~40KB gzip → 0KB)

### Files to create
- `src/hooks/useInView.ts` — IntersectionObserver hook, returns `{ ref, inView }`
- `src/hooks/useScrollProgress.ts` — native scroll progress, returns `0-1` number

### Files to update
- `src/index.css` — add CSS animation keyframes & utility classes
- `src/components/ScrollProgress.tsx` — replace framer-motion with native approach
- `src/components/BackToTop.tsx` — replace `AnimatePresence` + `motion.button` with CSS transitions
- `src/components/Hero.tsx` — replace `motion.*` with CSS + `useEffect` trigger on mount
- `src/components/AboutUs.tsx` — replace `motion.div` + `whileInView` with `useInView` + CSS
- `src/components/Statistics.tsx` — same
- `src/components/CoffeeProducts.tsx` — same
- `src/components/RoastingProcess.tsx` — same
- `src/components/WhyChooseUs.tsx` — same
- `src/components/Gallery.tsx` — same
- `src/components/Testimonials.tsx` — same
- `src/components/CTA.tsx` — same
- `package.json` — remove `framer-motion` dependency

### CSS animation classes to add in `index.css`
```css
@keyframes fade-in {
  from { opacity: 0 }
  to { opacity: 1 }
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(30px) }
  to { opacity: 1; transform: translateY(0) }
}
@keyframes slide-left {
  from { opacity: 0; transform: translateX(-30px) }
  to { opacity: 1; transform: translateX(0) }
}
@keyframes scale-in {
  from { opacity: 0; transform: scale(0.95) }
  to { opacity: 1; transform: scale(1) }
}
@keyframes scale-x {
  from { transform: scaleX(0) }
  to { transform: scaleX(1) }
}

.animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
.animate-slide-up { animation: slide-up 0.6s ease-out forwards; }
.animate-slide-left { animation: slide-left 0.6s ease-out forwards; }
.animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
.animate-scale-x { animation: scale-x 0.6s ease-out forwards; }
.animate-delay-100 { animation-delay: 0.1s; }
.animate-delay-200 { animation-delay: 0.2s; }
.animate-delay-300 { animation-delay: 0.3s; }
.animate-delay-400 { animation-delay: 0.4s; }
.animate-delay-500 { animation-delay: 0.5s; }
.animate-delay-600 { animation-delay: 0.6s; }
```

### ScrollProgress replacement
```tsx
// before: framer-motion useScroll + useSpring
// after: useScrollProgress hook + inline style
export default function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div
      style={{ transform: `scaleX(${progress})` }}
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-gradient-to-r from-gold-500 to-gold-700"
    />
  )
}
```

### BackToTop replacement
```tsx
// before: AnimatePresence + motion.button
// after: CSS transition + conditional render
<div
  className={`fixed bottom-6 right-6 z-50 transition-all duration-200 ${
    visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
  }`}
>
  <button onClick={...}>...</button>
</div>
```

### Pattern for all section components
```tsx
// BEFORE:
<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }} transition={{ duration: 0.6 }}>
  ...
</motion.div>

// AFTER:
<div ref={ref} className={inView ? 'animate-slide-up' : 'opacity-0'}>
  ...
</div>
```
where `{ ref, inView } = useInView()`

### Hero entrance animations (mount-based, not scroll-based)
```tsx
// use useEffect on mount to trigger sequence
const [mounted, setMounted] = useState(false)
useEffect(() => { setMounted(true) }, [])

// then:
<div className={mounted ? 'animate-fade-in animate-delay-100' : 'opacity-0'}>...</div>
```

---

## Step 2: Image Optimization

### Width/Height attributes
- `AboutUs.tsx` — parent is `aspect-[4/3]`, add `w-full h-full` is enough. But add explicit `width={800}` `height={600}` to `<img>` for CLS.
- `CoffeeProducts.tsx` — `aspect-[4/3]` parent, add `width={600}` `height={450}` to `<img>`.
- `Gallery.tsx` — masonry layout, width not fixed per image. Add `width={600}` `height={400}` as intrinsic.
- Hero/CTA CSS backgrounds — leave as-is, they don't cause CLS (not in flow).

### WebP conversion
Replace Unsplash URLs: add `&fm=webp` to every URL. Examples:
- `https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&q=80` → `...?w=1920&q=80&fm=webp`
- `https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80` → `...?w=600&q=80&fm=webp`

### Lazy loading
All `<img>` already have `loading="lazy"` ✓
Hero background: add `<link rel="preload" as="image" href="...">` in `index.html`

---

## Step 3: Self-host Google Fonts

### Approach 1: Download & self-host (recommended for PageSpeed)
1. Download Inter (400,600,700) + Playfair Display (400,600,700) as woff2
2. Place in `src/assets/fonts/`
3. Use `@font-face` in `index.css`
4. Add `<link rel="preload" as="font" crossorigin>` for critical woff2 files
5. Remove Google Fonts `<link>` from `index.html`

### Approach 2: Keep Google Fonts but optimize
If Approach 1 is too complex for a learning project:
1. Reduce font weights to: Inter 400,600,700 + Playfair Display 400,600,700
2. Add `&text=` parameter to subset characters
3. Preload critical woff2 files

Use Approach 1 for maximum PageSpeed score.

**Font files needed:**
```
public/fonts/Inter-400.woff2
public/fonts/Inter-600.woff2
public/fonts/Inter-700.woff2
public/fonts/PlayfairDisplay-400.woff2
public/fonts/PlayfairDisplay-600.woff2
public/fonts/PlayfairDisplay-700.woff2
```

Download from google-webfonts-helper or use `@fontsource` packages.

**Simpler: use @fontsource packages**
```bash
npm install @fontsource/inter @fontsource/playfair-display
```
Then import only needed weights in `index.css` or `main.tsx`:
```tsx
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
```

---

## Step 4: Code-split Below-fold Components

In `App.tsx`:
```tsx
import { lazy, Suspense } from 'react'

// Above-fold (eager):
import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'

// Below-fold (lazy):
const Statistics = lazy(() => import('@/components/Statistics'))
const CoffeeProducts = lazy(() => import('@/components/CoffeeProducts'))
const RoastingProcess = lazy(() => import('@/components/RoastingProcess'))
const WhyChooseUs = lazy(() => import('@/components/WhyChooseUs'))
const Gallery = lazy(() => import('@/components/Gallery'))
const Testimonials = lazy(() => import('@/components/Testimonials'))
const CTA = lazy(() => import('@/components/CTA'))
const Footer = lazy(() => import('@/components/Footer'))
```

Wrap all lazy components in `<Suspense>`.

---

## Step 5: Lazy-load Locales

In `src/i18n.ts`:
```ts
// Instead of importing both JSON files eagerly, use i18next's backend
// or dynamic import on language change:

i18n.on('languageChanged', async (lng) => {
  const resource = await import(`./locales/${lng}/translation.json`)
  i18n.addResourceBundle(lng, 'translation', resource)
})
```

But this needs the initial load too. Better approach:
- Keep default language (ID) bundled (it's the initial render)
- Lazy-load EN only when needed

---

## Execution Order (priority)

1. **Replace framer-motion** — biggest JS reduction, all CSS animations
2. **Image optimization** — WebP + width/height attributes
3. **Code-split below-fold components** — further JS reduction
4. **Self-host fonts** — eliminate render-blocking font request
5. **Lazy-load locales** — minor saving

---

## Estimated Outcome

| Metric | Before | After |
|--------|--------|-------|
| JS bundle (gzip) | 142 KB | ~70-80 KB |
| CSS bundle (gzip) | 6 KB | ~7 KB (+animation CSS) |
| Font requests | 9 files, render-blocking | 6 files, self-hosted, preloaded |
| Image format | JPEG | WebP |
| LCP | ~2-3s | ~1.2-1.8s |
| CLS | potential shift | stable (w/h attributes) |
