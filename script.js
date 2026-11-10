// Mengambil elemen lewat class
const teksSambutan = document.querySelector(".welcome-text");
const semuaMenu = document.querySelectorAll(".nav a");
const semuaKartu = document.querySelectorAll(".kartu");

// Menandai menu yang sedang aktif
function aktifkanMenu(link) {
    semuaMenu.forEach(function (m) {
        m.classList.remove("aktif");
    });
    link.classList.add("aktif");
}

// Menghapus warna pink dari semua kartu
function hapusWarna() {
    semuaKartu.forEach(function (k) {
        k.classList.remove("pink");
    });
}

// Mengubah teks sambutan dengan efek pudar
function ubahNama(teks) {
    teksSambutan.classList.add("fade");
    setTimeout(function () {
        teksSambutan.textContent = teks;
        teksSambutan.classList.remove("fade");
    }, 300);
}

// Memberi warna pink pada kartu yang dipilih
function sorot(selector) {
    const target = document.querySelector(selector);
    hapusWarna();
    target.classList.add("pink");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Daftar menu dan aksinya
const daftarMenu = [
    {
        menu: ".menu-home",
        aksi: function () {
            hapusWarna();
            ubahNama("Selamat Datang, Nama Mahasiswa");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    },
    {
        menu: ".menu-mahasiswa",
        aksi: function () {
            hapusWarna();
            ubahNama("Selamat Datang, Dinda Alfahira Marpaung");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    },
    { menu: ".menu-kelas",     aksi: function () { sorot(".progres"); } },
    { menu: ".menu-aktivitas", aksi: function () { sorot(".aktivitas"); } },
    { menu: ".menu-statistik", aksi: function () { sorot(".statistik"); } },
    { menu: ".menu-dokumen",   aksi: function () { sorot(".dokumen"); } }
];

// Pasang klik pada tiap menu
daftarMenu.forEach(function (data) {
    const link = document.querySelector(data.menu);
    link.addEventListener("click", function (e) {
        e.preventDefault();
        aktifkanMenu(link);
        data.aksi();
    });
});

// Settings dan Sign Out tidak berpindah halaman
document.querySelector(".menu-settings").addEventListener("click", function (e) {
    e.preventDefault();
});

document.querySelector(".menu-signout").addEventListener("click", function (e) {
    e.preventDefault();
});