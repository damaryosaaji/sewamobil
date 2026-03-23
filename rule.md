# Project Overview: Platform Sewa Mobil Peer-to-Peer (C2C)

## 1. Informasi Dasar Proyek

* **Jenis Proyek:** Skripsi Ilmu Komputer (Peminatan UI/UX)
* **Domain:** Marketplace / E-commerce
* **Model Bisnis:** Peer-to-Peer (C2C)
* **Industri:** Transportasi / Sewa Mobil

---

## 2. Model Bisnis & Spesifikasi Detail (BMC)

Agen AI harus memahami logika bisnis berikut saat membuat fitur:

### 2.1 Customer Segments (Segmen Pelanggan)
Aplikasi ini melayani dua pihak (Two-sided Marketplace):
1.  **Penyewa (Customer):** Wisatawan domestik/mancanegara, pekerja mobilisasi sementara, keluarga liburan akhir pekan, individu yang mobilnya sedang diservis.
2.  **Pemilik Kendaraan (Mitra):** Pemilik mobil pribadi (kendaraan sering menganggur), pengusaha rental skala kecil yang ingin go-digital.

### 2.2 Value Propositions (Nilai Tambah)
* **Bagi Penyewa:** Harga kompetitif (C2C), pilihan mobil lokal beragam, proses pemesanan via aplikasi praktis, sistem ulasan (review) jujur.
* **Bagi Mitra:** Passive income dari aset menganggur, fleksibilitas jadwal sewa, sistem pembayaran aman, jaminan keamanan (verifikasi & asuransi).

### 2.3 Customer Relationships (Hubungan Pelanggan)
* **Automated Self-Service:** Alur mandiri penuh (pesan -> bayar -> selesai) di aplikasi.
* **Trust & Safety (Kunci UI/UX):** Verifikasi identitas ketat (e-KTP/SIM) melalui KYC, sistem *rating/review* dua arah.
* **Customer Support 24/7:** Saldo bantuan untuk kendala jalan raya atau darurat.

### 2.4 Revenue Streams (Sumber Pendapatan)
* **Komisi Transaksi:** Potongan persentase (2% - 5%) per transaksi berhasil (dari sisi Mitra).
* **Biaya Layanan (Service Fee):** Biaya tetap (Rp 2.000) dibebankan ke Penyewa.
* **Bagi Hasil Asuransi:** Komisi dari partner asuransi untuk proteksi tambahan.

### 2.5 Key Partnerships (Mitra Utama)
* **Perusahaan Asuransi:** Rekanan wajib untuk perlindungan all-risk komersial harian.
* **Payment Gateway:** Pemrosesan pembayaran aman (CC, Transfer, E-wallet).
* **Penyedia KYC (Verifikasi):** Validasi identitas otomatis (misal: Dukcapil API).
* **Penyedia GPS (Opsional):** Opsi pelacak GPS murah untuk Mitra.

---

## 3. Metodologi Penelitian (UI/UX)

Agen AI harus mengetahui fase ini untuk membantu membuat aset desain atau rencana pengujian.

* **Metode Perancangan:** **Design Thinking** (Iteratif & Human-Centered).
    1.  *Empathize*: Wawancara pengguna mencari *pain points*.
    2.  *Define*: Pembuatan User Persona & Customer Journey Map.
    3.  *Ideate*: Solusi UI/UX (misal: *Car Condition Tracker*).
    4.  *Prototype*: Wireframe & High-Fidelity (Figma).
    5.  *Test*: Pengujian ke pengguna.

* **Alat Ukur/Evaluasi (Kuantitatif Skripsi):**
    * **System Usability Scale (SUS):** Mengukur kemudahan penggunaan (10 pertanyaan standar).
    * **User Experience Questionnaire (UEQ):** Mengukur daya tarik, stimulasi, dan kebaruan.
    * **A/B Testing (Komparatif):** Membandingkan performa task (misal: Cari Mobil) antara Prototype vs Pesaing (Traveloka). Metrik: *Task Success Rate* & *Time on Task*.

---

## 4. Kebutuhan Menu & Arsitektur Metadata

Ini adalah cetak biru untuk struktur navigasi dan struktur data (API/Database) yang harus diikuti oleh Agen AI.

### 4.1 Sisi Customer (Penyewa) - Mobile App
*Fokus UX: Kemudahan, Kecepatan, Keamanan Verifikasi, Transparansi.*

1.  **Halaman: Onboarding**
    * *Fungsi:* Memperkenalkan nilai utama aplikasi (C2C, Mudah, Aman) kepada pengguna baru.
    * *Metadata Utama:* Slider Image/Illustration, Teks Deskripsi Singkat, Tombol "Daftar" & "Masuk".
2.  **Halaman: Login / Masuk**
    * *Fungsi:* Akses autentikasi pengguna.
    * *Metadata Utama:* Email/No HP, Password, Tombol "Masuk", Opsi "Lupa Password", Link "Daftar Baru".
3.  **Menu: Home / Eksplorasi & Peta**
    * *Fungsi:* Halaman utama. Mencari mobil terdekat (Hyper-local).
    * *Metadata Utama:* Koordinat User (Lat/Long), Radius pencarian, Tanggal/Waktu Sewa, Filter (Harga, Transmisi, Jumlah Kursi). *Pin* lokasi mobil di Peta.
4.  **Menu: Detail Kendaraan**
    * *Fungsi:* Menilai kelayakan mobil & reputasi Host.
    * *Metadata Utama:* ID Mobil, Merek/Tahun, Galeri Foto, Rating Host, Deskripsi/Aturan Khusus, Harga per Hari.
5.  **Halaman: Verifikasi Identitas (KYC)**
    * *Fungsi:* Mengunggah dokumen legal wajib sebelum pemesanan pertama.
    * *Metadata Utama:* NIK KTP, Nomor SIM A, Foto KTP, Foto SIM, Status Liveness Check (Biometrik).
6.  **Menu: Checkout / Order & Pembayaran**
    * *Fungsi:* Rincian biaya akhir, pemilihan asuransi, dan finalisasi order.
    * *Metadata Utama:* ID Booking (Draft), Durasi Sewa, Subtotal Harga, Pilihan Asuransi (Tanpa/Basic/Premium), Biaya Layanan (Fixed Rp 2k), Metode Pembayaran, Tombol "Bayar Sekarang".
7.  **Menu: Car Condition Tracker (Pembeda Utama)**
    * *Fungsi:* Mencatat kondisi mobil saat serah terima (Check-in & Check-out).
    * *Metadata Utama:* ID Booking (Aktif), Foto Eksterior/Interior (Sebelum & Sesudah), Koordinat Titik Lecet pada Vector/Image Map Mobil, Timestamp, Tanda Tangan Digital.
8.  **Menu: Logout / Keluar**
    * *Fungsi:* Mengakhiri sesi pengguna secara aman.
    * *Metadata Utama:* Konfirmasi Dialog, Tombol "Ya, Keluar" & "Batal".

### 4.2 Sisi Mitra (Pemilik Mobil) - Mobile App
*Fokus UX: Manajemen Aset Mudah, Pemantauan Pendapatan, Mitigasi Risiko, Pelacakan Realtime.*

1.  **Menu: Dashboard Utama**
    * *Fungsi:* Ringkasan performa & aktivitas.
    * *Metadata Utama:* Saldo Pendapatan (Rp), Jumlah Mobil Disewa Aktif, Notifikasi Permintaan Baru.
2.  **Menu: Manajemen Inventaris**
    * *Fungsi:* Menambah mobil dan mengatur ketersediaan.
    * *Metadata Utama:* Plat Nomor, Nomor Rangka/Mesin, Foto STNK, Kalender Blokir (Tanggal tidak tersedia), Harga Kustom (misal: Weekend rate).
3.  **Menu: Approval Pesanan**
    * *Fungsi:* Meninjau profil penyewa sebelum menerima.
    * *Metadata Utama:* Foto Profil Penyewa, Skor Rating Penyewa, Riwayat Sewa Penyewa, Estimasi Pendapatan Bersih (Setelah komisi).
4.  **Menu: Serah Terima (Handover)**
    * *Fungsi:* Validasi akhir saat menyerahkan kunci.
    * *Metadata Utama:* Checklist Fisik (Kunci, STNK, Dongkrak), Bukti Persetujuan Car Condition Tracker, Kode OTP/QR Check-in.

### 4.3 Sisi Admin Platform - Web Dashboard
*Fokus UX: Efisiensi Operasional, Resolusi Masalah.*

1.  **Menu: Overview & Analitik**
    * *Fungsi:* Memantau kesehatan bisnis dan transaksi.
    * *Metadata Utama:* Gross Merchandise Value (GMV), Total Komisi Platform, Grafik Daily Active Users (DAU).
2.  **Menu: Pusat Verifikasi (KYC)**
    * *Fungsi:* Pengecekan manual jika AI ragu.
    * *Metadata Utama:* ID Pengguna, Hasil Crop Foto KTP vs Selfie, Skor Kemiripan AI, Tombol Actions (Approve/Reject).
3.  **Menu: Manajemen Sengketa (Dispute)**
    * *Fungsi:* Menengahi masalah (Kecelakaan, telat kembali).
    * *Metadata Utama:* ID Tiket Laporan, Log Chat Penyewa-Mitra, Bukti Foto Kerusakan, Status Klaim Asuransi.
4.  **Menu: Manajemen Pengguna**
    * *Fungsi:* Mengawasi dan memblokir pengguna bermasalah.
    * *Metadata Utama:* Status Akun (Aktif/Banned), Riwayat Pelanggaran Aturan, Total Transaksi per Akun.