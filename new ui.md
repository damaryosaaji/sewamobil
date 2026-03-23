# Project Overview: Platform Sewa Mobil Peer-to-Peer (C2C)

## 1. Informasi Dasar Proyek

* **Jenis Proyek:** Skripsi Ilmu Komputer (Peminatan UI/UX)
* **Domain:** Marketplace / E-commerce
* **Model Bisnis:** Peer-to-Peer (C2C)
* **Industri:** Transportasi / Sewa Mobil
* **Nama Platform (Placeholder):** **WheelsShare**

---

## 2. Model Bisnis & Spesifikasi Detail (BMC)

Agen AI harus memahami logika bisnis berikut saat membuat fitur:

### 2.1 Customer Segments (Segmen Pelanggan)
Aplikasi ini melayani dua pihak (Two-sided Marketplace):
1.  **Penyewa (Customer):** Wisatawan domestik/mancanegara, pekerja mobilisasi sementara, keluarga liburan akhir pekan, individu yang mobilnya sedang diservis.
2.  **Pemilik Kendaraan (Mitra/Host):** Pemilik mobil pribadi (kendaraan sering menganggur), pengusaha rental skala kecil yang ingin go-digital.

### 2.2 Value Propositions (Nilai Tambah)
* **Bagi Penyewa:** Harga kompetitif (C2C), pilihan mobil lokal beragam, proses pemesanan praktis via aplikasi, dan sistem ulasan (review) jujur.
* **Bagi Mitra:** Passive income dari aset menganggur, fleksibilitas jadwal sewa, sistem pembayaran aman, jaminan keamanan (verifikasi & asuransi).

### 2.3 Customer Relationships (Hubungan Pelanggan)
* **Automated Self-Service:** Alur mandiri penuh (pesan -> bayar -> selesai) di aplikasi mobile.
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
* **Alat Ukur/Evaluasi (Kuantitatif Skripsi):**
    * **System Usability Scale (SUS):** Mengukur kemudahan penggunaan.
    * **User Experience Questionnaire (UEQ):** Mengukur daya tarik, stimulasi, dan kebaruan.
    * **A/B Testing (Komparatif):** Membandingkan performa task antara Prototype vs Pesaing (Traveloka).

---

## 4. Spesifikasi Teknis Prototype & Panduan Implementasi

Bagian ini mendefinisikan standar untuk pembuatan file HTML *prototype* yang saling terhubung dan dapat diuji langsung di mobile.

### 4.1 Tech Stack & Perpustakaan (Wajib)
Semua file HTML harus menyertakan CDN berikut di `<head>` atau sebelum penutup `</body>`:

1.  **UI Framework:** **Bootstrap 5 (v5.3+)** (CSS & JS Bundle).
2.  **Icons:** **Material Icons Rounded** (Font).
3.  **Notifications/Alerts:** **SweetAlert 2** (v11+).
4.  **Charts/Dashboards (Khusus Sisi Admin):** **Apache ECharts** (v5+).

### 4.2 Prinsip Desain & Arsitektur Kode

Untuk mencapai standar "Clean, Timeless, Scalable, dan Maintainable", patuhi aturan berikut:

#### A. Desain UI/UX
* **Mobile-First:** Gunakan utilitas *responsive* Bootstrap (`col-`, `d-sm-none`, dll.) secara agresif. Pastikan target klik (tombol, link) minimal 44x44px untuk mobile.
* **Clean & Timeless:** Hindari *shadow* yang berlebihan, gradasi kompleks, atau tren desain sesaat. Fokus pada tipografi yang jelas, spasi yang konsisten (utilitas `p-`, `m-` Bootstrap), dan palet warna profesional (Primary: Blue, Secondary: Gray/White).
* **Icons:** Hanya gunakan Material Icons Rounded (`.material-icons-rounded`).

#### B. Arsitektur Kode (DRY & Separation of Concerns)
* **HTML Bersih:** Gunakan kelas Bootstrap standard. Hindari inline CSS (`style="..."`).
* **CSS Eksternal:** Pisahkan custom CSS (misal: untuk peta, condition tracker) ke dalam file eksternal (misal: `style.css`).
* **JavaScript Eksternal:** Pisahkan logika interaksi, validasi dummy, dan inisialisasi ECharts ke dalam file JavaScript eksternal (misal: `app.js`, `admin-charts.js`). Jangan menulis JS besar di dalam tag `<script>` HTML.
* **Komponen Reuse (DRY):** Karena ini *prototype* HTML statis, gunakan struktur kode yang konsisten untuk Navbar dan Bottom Navigation di setiap halaman agar mudah di-*copy-paste* atau jika nantinya dipindah ke komponen *frontend framework*.

#### C. Data Dummy Profesional
* Hindari teks placeholder ("Lorem Ipsum", "Mobil A").
* Gunakan data realistis Indonesia:
    * *Mobil:* Toyota Avanza G 2023, Honda BRS 2022, Mitsubishi Xpander Ultimate.
    * *Lokasi:* Setiabudi, Jakarta Selatan; Kuta, Bali; Dago, Bandung.
    * *Nama:* Andi Kusuma, Siti Nuraini.
    * *Harga:* Rp 450.000 / hari, Rp 750.000 / hari.

---

## 5. Sitemap & Metadata Halaman (Linked Prototype)

Ini adalah cetak biru untuk struktur navigasi dan data dummy yang harus ada di setiap file HTML. Semua file HTML harus saling terhubung menggunakan `<a href="...">`.

### 5.1 Sisi Customer (Penyewa) - Mobile HTML Prototype
*Fokus: Kebutuhan dasar perjalanan sewa, interaksi mulus.*

| No | File HTML | Fungsi Utama | Metadata Utama (Dummy) | Interaksi & Link Wajib |
|:--|:---|:---|:---|:---|
| 1 | `index.html` | **Onboarding** | Slider Image profesional, Deskripsi Singkat. | Tombol "Mulai" -> `login.html`. |
| 2 | `login.html` | **Login / Masuk** | Form Email & Password profesional. | Tombol "Masuk" -> `home.html`. Gunakan **SweetAlert** untuk simulasi login sukses/gagal. |
| 3 | `home.html` | **Home / Eksplorasi Peta** | Peta (Dummy Image), Pin HargaMobil Terdekat. | Navbar & Bottom Nav lengkap. Klik Pin/Card Mobil -> `detail_mobil.html`. |
| 4 | `detail_mobil.html` | **Detail Kendaraan** | Galeri Foto Mobil, Spesifikasi (Avanza 2023, AT), Host Profile verified. | Tombol "Pesan Sekarang" -> `checkout.html`. |
| 5 | `kyc.html` | **Verifikasi Identity** | Form Upload KTP, SIM A, Selfie (Dummy upload buttons). | Mengarah ke `checkout.html` setelah sukses. |
| 6 | `checkout.html` | **Checkout & Order** | Rincian Biaya (Sewa 3 Hari, Biaya Layanan Rp 2k), Pilihan Asuransi. | Tombol "Bayar" -> Gunakan **SweetAlert** konfirmasi pembayaran. Sukses bayar -> `home.html`. |
| 7 | `condition_tracker.html`| **Condition Tracker** | Vektor Mobil (Dummy Image), Hotspots untuk lecet. | Gunakan **SweetAlert** untuk konfirmasi serah terima. |
| 8 | `logout.html` | **Logout / Keluar** | Dialog Konfirmasi. | Gunakan **SweetAlert** konfirmasi. Ya -> `login.html`. |

### 5.2 Sisi Mitra (Pemilik Mobil) - Mobile HTML Prototype
*Fokus: Manajemen aset dan persetujuan cepat.*

| No | File HTML | Fungsi Utama | Metadata Utama (Dummy) | Interaksi & Link Wajib |
|:--|:---|:---|:---|:---|
| 1 | `partner_dashboard.html`| **Dashboard Utama** | Ringkasan Saldo (Rp 5.200.000), Status Mobil (2 Disewa). | Notifikasi Permintaan Baru clickable -> `partner_approval.html`. |
| 2 | `partner_inventory.html`| **Manajemen Inventaris** | List Mobil (Avanza G B 1234 XYZ). | Tombol "Tambah Mobil" (Swal simulasi). |
| 3 | `partner_approval.html` | **Approval Pesanan** | Profil Penyewa (Andi, 4.9 stars, Verified). | Tombol "Terima" & "Tolak" (Swal simulasi). |
| 4 | `partner_handover.html` | **Serah Terima** | Checklist (Kunci, STNK), QR Code Scanner placeholder. | Swal konfirmasi sukses serah terima. |

### 5.3 Sisi Admin Platform - Web HTML Dashboard
*Fokus: Efisiensi, Resolusi Masalah, Analitik data.*

| No | File HTML | Fungsi Utama | Metadata Utama (Dummy) | Interaksi & Link Wajib |
|:--|:---|:---|:---|:---|
| 1 | `admin_dashboard.html` | **Overview & Analitik** | GMV (Rp 150M), DAU (15k). | **WAJIB:** Gunakan **Apache ECharts** untuk grafik Tren GMV bulanan dan Distribusi Tipe Mobil. |
| 2 | `admin_kyc.html` | **Pusat Verifikasi KYC** | List Antrian, Perbandingan Foto KTP vs Selfie. | Tombol Approve/Reject (Swal simulasi). |
| 3 | `admin_dispute.html` | **Manajemen Sengketa** | List Tiket, ID Booking, Log Chat placeholder. | Status Tiket dropdown. |
| 4 | `admin_users.html` | **Manajemen Pengguna** | Database Pengguna, Status Akun (Aktif/Banned). | Tombol "Ban User" (Swal simulasi). |