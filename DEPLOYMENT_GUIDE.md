# 🚀 Panduan Deploy FIL GARAGE ke Rumahweb (Shared Hosting)

## ✅ Masalah yang Diperbaiki
- ❌ **Sebelum**: `filgarageautocare.com/booking` → 404 Error
- ✅ **Sesudah**: `filgarageautocare.com/booking` → Halaman booking terbuka dengan benar

## 🔧 Solusi yang Diimplementasikan

### 1. **Next.js Configuration** (`next.config.ts`)
```typescript
trailingSlash: true, // Menambahkan trailing slash untuk kompatibilitas
skipTrailingSlashRedirect: true, // Skip redirect trailing slash
distDir: 'out', // Folder output yang akan di-upload
```

### 2. **Apache .htaccess** (`public/.htaccess`)
- ✅ Rewrite rules untuk client-side routing
- ✅ Redirect semua request ke `index.html`
- ✅ Security headers
- ✅ Compression dan caching
- ✅ Custom 404 error page

### 3. **Build Scripts** (`package.json`)
```json
"build:static": "next build && next export",
"deploy": "npm run build && echo 'Build completed. Upload the out/ folder to your hosting.'"
```

## 📋 Langkah Deploy ke Rumahweb

### Step 1: Build Project
```bash
# Di terminal, jalankan:
npm run build
```

### Step 2: Upload ke Rumahweb
1. **Login ke cPanel Rumahweb**
2. **Buka File Manager**
3. **Masuk ke folder `public_html`**
4. **Upload semua file dari folder `out/`** ke `public_html/`
   - Pastikan file `.htaccess` ikut ter-upload
   - Pastikan struktur folder sama persis

### Step 3: Verifikasi Upload
Pastikan file-file ini ada di `public_html/`:
```
public_html/
├── .htaccess          ← PENTING! File ini harus ada
├── index.html
├── booking.html
├── services.html
├── pricelist.html
├── products.html
├── projects.html
├── whyus.html
├── workshop.html
├── faq.html
├── _next/
├── images/
└── ... (file lainnya)
```

### Step 4: Test Routing
Test URL berikut di browser:
- ✅ `https://filgarageautocare.com/` → Homepage
- ✅ `https://filgarageautocare.com/booking` → Halaman booking
- ✅ `https://filgarageautocare.com/services` → Halaman services
- ✅ `https://filgarageautocare.com/pricelist` → Halaman pricelist
- ✅ `https://filgarageautocare.com/products` → Halaman products
- ✅ `https://filgarageautocare.com/projects` → Halaman projects
- ✅ `https://filgarageautocare.com/whyus` → Halaman why us
- ✅ `https://filgarageautocare.com/workshop` → Halaman workshop
- ✅ `https://filgarageautocare.com/faq` → Halaman FAQ

## 🔍 Troubleshooting

### Jika Masih 404:
1. **Cek file .htaccess**
   ```bash
   # Pastikan file .htaccess ada di root public_html
   # Pastikan isinya sama dengan yang di public/.htaccess
   ```

2. **Cek permission file**
   ```bash
   # Di cPanel File Manager, pastikan:
   # - .htaccess: 644
   # - index.html: 644
   # - Folder _next: 755
   ```

3. **Cek Apache mod_rewrite**
   ```bash
   # Pastikan mod_rewrite enabled di hosting
   # Hubungi support Rumahweb jika perlu
   ```

### Jika CSS/JS tidak load:
1. **Cek path di browser dev tools**
2. **Pastikan folder `_next` ter-upload dengan benar**
3. **Cek permission folder `_next` (harus 755)**

## 🚀 Script Deploy Otomatis

Buat file `deploy.sh` untuk deploy otomatis:
```bash
#!/bin/bash
echo "🚀 Building FIL GARAGE..."
npm run build

echo "📦 Build completed!"
echo "📁 Upload folder 'out/' ke public_html di Rumahweb"
echo "✅ Pastikan file .htaccess ikut ter-upload"
echo "🔗 Test URL: https://filgarageautocare.com/booking"
```

## 📊 Monitoring

### Setelah Deploy:
1. **Test semua URL** di browser
2. **Cek Google Search Console** untuk error crawling
3. **Monitor performance** dengan Google Analytics
4. **Test mobile responsiveness**

## 🎯 Expected Results

Setelah implementasi ini:
- ✅ **Tidak ada lagi 404** untuk direct URL access
- ✅ **Client-side routing** bekerja dengan sempurna
- ✅ **SEO tetap optimal** dengan static files
- ✅ **Loading speed** tetap cepat
- ✅ **Social sharing** bekerja dengan benar

---

**Catatan Penting**: 
- File `.htaccess` adalah kunci utama untuk mengatasi masalah 404
- Pastikan file ini selalu ter-upload saat deploy
- Jika ada masalah, cek dulu apakah `.htaccess` ada dan permission-nya benar
