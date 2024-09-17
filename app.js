// const binatang = ["cat", "deer", "hog", "koala"];
// const jumlahBinatang = binatang.length;
// for (let i = 0; i < jumlahBinatang; i++) {
//   console.log(i, binatang[i]);
// }

// const str = "abcd";
// for (let i = 0; i <= 4; i++) {
//   console.log("Outer:", i);
//   for (let j = 0; j < str.length; j++) {
//     console.log("   Inner:" + str[j]);
//   }
// }

// const studentRow = [
//   ["Olivia", "Liam", "Emma", "Noah"],
//   ["Amelia", "Oliver", "Ava", "Elijah"],
//   ["Sophia", "Mateo", "Isabella", "Lucas"],
// ];

// for (let i = 0; i < studentRow.length; i++) {
//   const row = studentRow[i];
//   console.log(`Seat Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(`   ${row[j]}`);
//   }
// }
// seat = 0;
// for (let row of studentRow) {
//   seat++;
//   console.log(`Seat Row #${seat}`);
//   for (let student of row) {
//     console.log(`   ${student}`);
//   }
// }

// const PASSWORD = "Pass123";
// let input = prompt("Masukkan Password Anda");

// while (input !== PASSWORD) {
//   input = prompt("Masukkan Password Anda");
// }
// alert("Anda berhak mengakses");

// let input = prompt("Hei, say something");
// while (true) {
//   input = prompt(input);
//   if (input === "stop") {
//     break;
//   }
// }
// alert("OK");

// let maximum = parseInt(prompt("Masukkan nilai maksimal"));
// while (!maximum) {
//   maximum = parseInt(prompt("Masukkan nilai maksimal!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);
// let attempts = 1;

// let guess = parseInt(prompt("Isi tebakan pertama kamu!"));

// while (parseInt(guess) !== targetNum) {
//   attempts++;
//   if (guess > targetNum) {
//     guess = prompt("Terlalu tinggi! tebak lagi:");
//   } else {
//     guess = prompt("Terlalu rendah! tebak lagi;");
//   }
// }
// alert(
//   `Selamat Tebakkan Anda BENAR!! dengan percobaan sebanyak ${attempts} kali.`
// );

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);
// // }

// for (item of fruits) {
//   console.log(item);
// }

// const studentScore = {
//   Olivia: 20,
//   Liam: 13,
//   Emma: 40,
//   Noah: 18,
//   Amelia: 32,
//   Oliver: 10,
//   Ava: 11,
//   Elijah: 21,
//   Sophia: 14,
//   Mateo: 22,
// };

// for (let student in studentScore) {
//   console.log(`${student} memiliki skor ${studentScore[student]} `);
// }

// let total = 0;
// let scores = Object.values(studentScore);
// console.log(scores);
// for (let score of scores) {
//   total += score;
// }
// console.log(`Nilai Rata-rata ${total / scores.length}`);

// let programing = "JavaScript";

// function typeSafe() {
//   programing = "TypeScript";
//   console.log(programing);
// }
// typeSafe();
// console.log(programing);

// let tinggi = 8;

// if (tinggi > 5) {
//   let lebar = 10;
//   console.log(lebar);
// }
// console.log(tinggi);

// function lamarKerja() {
//   const jabatan = "Programer";

//   function orangDalam() {
//     let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
//     console.log(kenalan);
//   }
//   orangDalam();
// }

// function perpangkatan(nilai) {
//   return nilai * nilai;
// }

// let hasil = perpangkatan(5);

// const hasilPerpangkatan = (nilai) => nilai * nilai;

// function duaKali(func) {
//   func();
//   func();
// }

// function lemparDadu() {
//   const nilai = Math.floor(Math.random() * 6) + 1;
//   console.log(nilai);
// }

// function hasilnyaAdalahFunction() {
//   const rand = Math.random();
//   if (rand > 0.1) {
//     return () => console.log("Selamat, angkanya lebih besar");
//   } else {
//     return () => console.log("Maaf coba lagi");
//   }
// }

// const saya = {
//   nama: "Andri Raharjo",
//   hobi: "Programing",
//   kenalan: () => `Hi, saya ${saya.nama}. Hobi saya ${saya.hobi}`,
// };

// const saya = {
//   nama: "Andri Raharjo",
//   hobi: "Programing",
//   kenalan: function () {
//     return `Hi, saya ${this.nama}. Hobi saya ${this.hobi}`;
//   },
// };

// function teriak(msg) {
//   try {
//     console.log(msg.toUpperCase());
//   } catch {
//     console.log(error);
//     console.log("Silahkan masukkan tipe data string pada argument teriak()");
//   }
// }

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function print(element) {
//   console.log(element);
// }

// print(angka[0]);
// print(angka[1]);
// angka.forEach(print);
// angka.forEach(function (element) {
//   if (element % 2 === 0) {
//     console.log(element);
//   }
// });

// angka.forEach(function (item) {
//   let hasil = item * 10;
//   console.log(hasil);
// });
// console.log(angka);

// function myFunction(item, index, arr) {
//   arr[index] = item * 20;
// }
// angka.forEach(myFunction);
// document.getElementById("demo").innerHTML = angka;
// console.log(angka);

const animes = [
  {
    title: "Attack on Titan",
    rating: 90,
    year: 2013,
  },
  {
    title: "One Piece",
    rating: 89,
    year: 1999,
  },
  {
    title: "Bleach",
    rating: 82,
    year: 2012,
  },
  {
    title: "Hunter x Hunter",
    rating: 95,
    year: 2011,
  },
  {
    title: "Naruto",
    rating: 84,
    year: 2002,
  },
];

// animes.forEach((anime) => console.log(`${anime.title} - ${anime.rating}/100`));

// const angkaDouble = angka.map((item) => item * 2);

// console.log(angkaDouble);

// const animeList = animes.map((anime) => {
//   return anime.title.toUpperCase();
// });

// console.log("Halo...");
// setTimeout(() => {
//   console.log("Masih disana gak?");
// }, 5000);

// setInterval(() => {
//   console.log(Math.random());
// }, 2000);

// const angkaGanjil = angka.filter((item) => item % 2 === 1);

// const animeBagus = animes.filter((anime) => anime.rating >= 85);
// const judulAnimeBagus = animeBagus.map((anime) => anime.title);
// const judanimes.filter((anime) => anime.rating >= 85).map((anime) => anime.title);

// const examScore = [80, 85, 70, 90, 93, 77];

// const isGraduate = examScore.every((score) => score >= 75);

// const isAnimeListNew = animes.some((anime) => anime.year > 2010);

// let total1 = 0;
// for (score of examScore) {
//   total1 += score;
// }

// const totalScore = examScore.reduce((score, accumulatorScore) => {
//   // console.log(score, accumulatorScore);
//   return score + accumulatorScore;
// });

// const bestAnime = animes.reduce((bestAnime, currAnime) => {
//   console.log(bestAnime, currAnime);
//   if (currAnime.rating > bestAnime.rating) {
//     return currAnime;
//   }
//   return bestAnime;
// });

// const person = {
//   firstName: "Jhon",
//   lastName: "Doe",
//   fullName: function () {
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const sumAll = (...nums) => {
//   return nums.reduce((total, el) => total + el);
// };

// const nama = ["Alex", "Bimo", "Cici", "Delila", "Felix", "Gerard"];

// const pemenang = (gold, silver, bronze, ...sisa) => {
//   console.log(`Mendali gold diraih: ${gold}`);
//   console.log(`Mendali silver diraih: ${silver}`);
//   console.log(`Mendali bronze diraih: ${bronze}`);
//   console.log(`Peserta lainnya: ${sisa}`);
// };

// const [gold, silver, bronze, ...peserta] = nama;

// const user = {
//   name: "John",
//   email: "john@doe.com",
//   role: "Admin",
// };

// const { name: nama, email, phone = "08123456789" } = user;
// const userAndRole = ({ name, role }) => {
//   return `${name} ${role}`;
// };
const anime = animes.map(({ title, year, rating }) => {
  return `${title} , ${year} rating: ${rating}`;
});
