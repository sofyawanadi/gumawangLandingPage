# SEO Data Checklist — Data yang Perlu Diisi

Data-data berikut akan memperkuat SEO tags & structured data.
Saat ini sebagian besar masih placeholder. Update setelah dapat data asli.

---

## 1. LocalBusiness JSON-LD

Data ini ada di `index.html` dalam `<script type="application/ld+json">` blok pertama.

| Field | Saat Ini (Placeholder) | Data yang Dibutuhkan | Contoh |
|---|---|---|---|
| `telephone` | `+6281234567890` | Nomor WhatsApp/telepon real | `+6281234567` |
| `email` | `hello@gumawangcoffee.com` | Email bisnis real | `info@gumawang.co.id` |
| `address` | Hanya `addressCountry: ID` | Alamat lengkap | Lihat format di bawah |
| `priceRange` | `$$` | Range harga produk | `Rp 50.000 - Rp 250.000` |
| `image` | `og-image.png` (generik) | Foto roastery/toko asli | URL ke foto real |
| `geo` | Tidak ada | Koordinat Google Maps | Lihat format di bawah |
| `openingHours` | Tidak ada | Jam operasional | `"Mo-Fr 08:00-17:00"` |
| `sameAs` | Tidak ada | Link social media | Instagram, Facebook, dll |
| `areaServed` | Tidak ada | Wilayah layanan | `"Indonesia"` atau kota |
| `url` | `https://gumawangcoffee.com` | Domain asli | Ganti ke domain real |

### Format alamat lengkap:
```json
"address": {
  "@type": "PostalAddress",
  "streetAddress": "Jl. Contoh No. 123",
  "addressLocality": "Bandung",
  "addressRegion": "Jawa Barat",
  "postalCode": "40123",
  "addressCountry": "ID"
}
```

### Format koordinat:
```json
"geo": {
  "@type": "GeoCoordinates",
  "latitude": -6.9175,
  "longitude": 107.6191
}
```

### Format social media:
```json
"sameAs": [
  "https://instagram.com/gumawangcoffee",
  "https://facebook.com/gumawangcoffee",
  "https://wa.me/6281234567"
]
```

---

## 2. Product JSON-LD (3 Produk Kopi)

Data ini ada di `index.html`, satu blok JSON-LD per produk.

### Arabica Gayo
| Field | Saat Ini | Dibutuhkan |
|---|---|---|
| `name` | `Arabica Gayo` | Sudah benar |
| `description` | Deskripsi EN | Bisa tambah deskripsi ID |
| `price` | Tidak ada | Harga real, misal `"85000"` |
| `priceCurrency` | `IDR` | Sudah benar |
| `sku` | Tidak ada | ID produk internal, misal `"ARB-GYO-250"` |
| `weight` | Tidak ada | Berat netto, misal `"250g"` |
| `image` | Tidak ada | Foto produk real (URL) |

### Java Preanger
| Field | Saat Ini | Dibutuhkan |
|---|---|---|
| `price` | Tidak ada | Harga real |
| `sku` | Tidak ada | ID produk |
| `image` | Tidak ada | Foto produk real |

### Toraja
| Field | Saat Ini | Dibutuhkan |
|---|---|---|
| `price` | Tidak ada | Harga real |
| `sku` | Tidak ada | ID produk |
| `image` | Tidak ada | Foto produk real |

### Contoh Product JSON-LD lengkap:
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Arabica Gayo",
  "description": "Smooth and well-balanced with a hint of citrus brightness.",
  "image": "https://domainkamu.com/products/arabica-gayo.jpg",
  "sku": "ARB-GYO-250",
  "brand": { "@type": "Brand", "name": "Gumawang Coffee" },
  "category": "Coffee Beans",
  "offers": {
    "@type": "Offer",
    "price": "85000",
    "priceCurrency": "IDR",
    "availability": "https://schema.org/InStock",
    "url": "https://domainkamu.com/#coffee"
  }
}
```

---

## 3. Meta Tags Umum

| Tag | Saat Ini | Dibutuhkan |
|---|---|---|
| Domain (`og:url`, canonical, dll) | `gumawangcoffee.com` | Domain asli |
| `og:image` | Design generik 1200x630 | Foto/brand real |
| `twitter:image` | Sama dengan og:image | Bisa sama atau berbeda |
| `favicon.svg` | Icon coffee bean generik | Logo brand asli |
| `apple-touch-icon.png` | Icon generik | Logo brand asli |

---

## 4. Logo & Brand Assets

| Asset | Ukuran | Format | Status |
|---|---|---|---|
| Logo utama | Terserah | SVG/PNG | Belum ada |
| Favicon | 64x64 | SVG | Placeholder |
| Apple Touch Icon | 180x180 | PNG | Placeholder |
| OG Image | 1200x630 | PNG/JPG | Placeholder generik |
| Foto roastery | Min. 1200px | JPG/WebP | Belum ada |
| Foto produk (3) | Min. 600px | JPG/WebP | Pakai Unsplash |

---

## Cara Update Setelah Punya Data

1. Edit `index.html` — update JSON-LD blocks & meta tags
2. Ganti file di `public/` — favicon.svg, og-image.png, apple-touch-icon.png
3. Ganti URL gambar di `src/data/products.ts` dengan foto produk real
4. Update kontak di `src/locales/*/translation.json` (footer section)
5. Update domain di `index.html`, `public/robots.txt`, `public/sitemap.xml`
