// latihan soal
// 1. buat 1 soal object mahasiswa terdiri nama dan nim 
// 2. buat array object, tiap object terdiri dari

let mahasiswa = {
    nama: "Nazla Lutfia Ramadhani",
    nim: "A11.2023.15259"
};

let listMatkul = [
    { matkulId: "MK001", nilai: 89, matkulNama: "Pemrograman Web" },
    { matkulId: "MK002", nilai: 75, matkulNama: "Dasar Pemrograman" },
    { matkulId: "MK003", nilai: 90, matkulNama: "Basis Data" }
];

let detailMahasiswa = {
    ...mahasiswa,
    matkul: listMatkul
};

const { nama, nim, matkul } = detailMahasiswa;

console.log("Biodata Mahasiswa:");
console.log(`Nama: ${nama}, NIM ${nim}, Mata kuliah: ${listMatkul.map(mk => mk.matkulNama).join(", ")}`);
console.log('nama' + nama);