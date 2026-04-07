// variabel, menampung 1 data
const nim = "06543";

// variabel arry, menampung multiple data tapi 1 tipe data
const list_nim = ["06543", "06545", "12543"];

//object, menampung multiple data dan multiple tipe data
const mahasiswa = {
    // key : value
    // key nya ada nim nama dan status
    // key punya value masing masing
    nim: "123213",
    nama: "Rudi Santoso",
    umur: 21,
    status: true,
    // matkul: [
    //     {
    //         matkulId: "MK001", 
    //         nilai: 89
    //     },
    //     {
    //         matkulId: "MK032",
    //         nilai: 70
    //     }
    // ]
};

console.log(mahasiswa); 

// array of object
const list_mahasiswa = [
    {
        nama: "mahasiswa",
        nim: "A11.123123",
        umur: 17
    },
    {
        nama: "mahasiswa2",
        nim: "A11.1111",
        umur: 18
    }
];

console.log(list_mahasiswa);

// destruncturing object
const mahasiswa2 = {
    nim: "A11.1111",
    nama: "Nazla Lutfia Ramadhani",
    umur: 21,
    status: true,
};

// const umur = mahasiswa2.umur;
// console.log(umur);

// if (umur > 21) {
//     console.log("yee tua");
// } else {
//     console.log("umur tidak pantastu");
// }

list_mahasiswa.forEach((mhs) => {
    console.log(`Nama : ${mhs.nama}, NIM : ${mhs.nim}, Umur : ${mhs.umur}`);
}); 

const { nama, umur, status } = mahasiswa2;

// literal output, konsep penggabungan variabel dengan string
console.log(`Nama : ${nama}, Umur : ${umur}, Status : ${status}`);

// descructuring array of object
const list_mahasiswa2 = [
    { nim: "123", nama: "aska", umur: 21, status: true },
    { nim: "456", nama: "aurel", umur: 20, status: false },
    { nim: "789", nama: "anjay", umur: 22, status: true }
];

// spread, nambah data
const new_mahasiswa = { nim: "321", nama: "budi", umur: 23, status: true };

// spread ke array, tambahkan data ke array
const new_list_mahasiswa = [
    ...list_mahasiswa2,
    new_mahasiswa
];

// data before 3, data after 4
console.log(`Data sebelum : ${list_mahasiswa2.length}, Data setelah : ${new_list_mahasiswa.length}`);

const ipk = 3.7;

//spread ke object
const new_mahasiswa2 = {
    ...mahasiswa2,
    ipk
};

console.log(`Mahasiswa 2 dengan IPK: ${new_mahasiswa2.ipk}`)