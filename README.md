# BNMO - FRONTEND
## Prasyarat
1. Node.js 12.22.0 atau terbaru
2. MacOS, Windows (termasuk WSL), dan / atau Linux

## Cara menjalankan
1. Pastikan backend sudah berjalan. Cara menjalankan backend dapat dilihat di repo bnmo-backend
2. Menjalankan command berikut secara berurutan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasil website yang dibuat

## Teknologi yang digunakan

- Node.js v16.15.1
- Bootstrap 5

## Design Pattern 
1. Chain of Responsibility : Pada bagian submit di komponen transfer, dilakukan pengecekan apakah username yang dimasukkan sama dengan username pengguna saat itu sehingga bagian backend tidak perlu melakukan pengecekan serupa. Jika ternyata sama, permintaan tidak akan diteruskan ke bagian backend
2. Builder : Karena bagian backend hanya dapat menerima data dengan nama tertentu, dilakukan builder dengan bantuan formData untuk membuat struktur data yang ketika nantinya akan diterima oleh backend, bagian backend dapat menerima data tersebut dan membacanya dengan baik

=======
### Marcellus Michael Herman Kahari - 13520057
