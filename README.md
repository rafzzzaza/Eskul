# EkskulKu Mahaputra — Prototype Website

Prototype informasi ekstrakurikuler SMKS Mahaputra Cerdas Utama untuk tugas Design Thinking.

## Ekstrakurikuler yang ditampilkan
- Paskibra
- Panahan
- Rohis (Rohani Islam)
- Pencak Silat
- Futsal
- PMR (Palang Merah Remaja)

## Cara menjalankan
1. Ekstrak folder dari ZIP.
2. Buka folder dengan VS Code.
3. Jalankan `index.html` menggunakan Live Server.
4. Klik bagian kuis atau menu **Cocok** untuk mencoba rekomendasi.

## Fitur
- Katalog enam ekstrakurikuler sesuai daftar yang diberikan.
- Pencarian, filter kategori, dan dialog detail.
- Kuis minat lima pertanyaan dan rekomendasi otomatis.
- Navigasi bawah untuk perangkat mobile.
- Logo sekolah ditampilkan dari URL gambar yang tersedia secara publik. Jika logo tidak tampil, periksa koneksi internet atau ganti URL logo dengan file lokal resmi sekolah.

## Catatan data
Daftar ekskul dan deskripsi dasarnya mengikuti informasi yang diberikan pengguna. Jadwal, jam, lokasi spesifik, serta nama pembina belum diberikan sehingga ditandai **Informasi menyusul / Konfirmasi ke sekolah**. Foto hanya ilustrasi dan belum tentu foto asli kegiatan sekolah. Kuis merupakan rekomendasi sederhana berdasarkan jawaban, bukan penilaian bakat atau kemampuan.

## Berkas
- `index.html` — beranda dan katalog.
- `rekomendasi.html` — kuis minat.
- `style.css` — gaya visual.
- `script.js` — data ekskul dan katalog.
- `recommendation.js` — logika kuis dan rekomendasi.


## Catatan data prototype terbaru
- Semua foto kegiatan dan pembina menggunakan placeholder teks dummy, bukan foto orang atau gambar stok. Logo sekolah tetap memakai gambar logo.
- Nama pembina, foto pembina, dan jadwal resmi belum tersedia sehingga ditandai belum dikonfirmasi.
- Jadwal pada versi ini adalah jadwal CONTOH untuk menguji fitur deteksi bentrok. Paskibra/Rohis berbagi slot contoh Jumat 15.30–17.00; Futsal Jumat 16.00–17.30, sehingga sistem menandai bentrok. Ekskul lain ditandai tidak bentrok berdasarkan jadwal contoh. Jangan menganggap jadwal ini jadwal resmi sekolah.
