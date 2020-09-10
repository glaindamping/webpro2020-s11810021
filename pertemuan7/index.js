
//1. JavaScript Conditional
//a. Menggunakan If dan Else
// let nilaiAndi = 80;

// if (nilaiAndi > 80) {
//   console.log("SANGAT MEMUASKAN");
// } else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
//   console.log("MEMUASKAN");
// } else {
//   console.log("JANGAN MENYERAH, COBA LAGI!");
// }

//b. Menggunakan Switch dan Case 
// let seragamSekolah;
// let hari = "senin";

// switch (hari) {
//   case "senin":
//     seragamSekolah = "kemeja putih bawahan merah";
//     break;
//   case "selasa":
//     seragamSekolah = "kemeja hijau bawahan hitam";
//     break;
//   case "rabu":
//     seragamSekolah = "kemeja putih bawahan putih";
//     break;
//   case "kamis":
//     seragamSekolah = "kemeja batik merah bawahan hitam";
//     break;
//   case "jumat":
//     seragamSekolah = "baju pramuka";
//     break;
//   default:
//     seragamSekolah = "baju bebas";
// }
// console.log(seragamSekolah);


// let seragamSekolah;
// let hari = "senin";

// switch (hari) {
//   case "senin":
//   case "selasa":
//   case "rabu":
//   case "kamis":
//     seragamSekolah = "kemeja putih bawahan merah";
//     break;
//   case "jumat":
//     seragamSekolah = "baju pramuka";
//     break;
//   default:
//     seragamSekolah = "baju bebas";
// }

// console.log(seragamSekolah);

//2. Loop
//A. For loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
  
  /*
  Output:
  1
  2
  3
  4
  5
  6
  7
  8
  9
  10
  */
  
//B.For/In Loop

//   const buku = {
//     judul: "Harry Potter and The Philosopher's Stone",
//     pengarang: "J. K. Rowling",
//     tahun: 1997
//  };
//  for (x in buku) {
//    console.log(x, ':', buku[x]);
//  }
 
 //B.For/Of Loop

//  const buku = ["Game of Thrones: A Song of Ice and Fire",  
//    "Harry Potter and The Philosopher's Stone", 
//    "Lord of The Rings: The Fellowship of The Ring"
// ];

// for (x of buku) {
//   console.log(x);
// }

/*
Output:
Game of Thrones: A Song of Ice and Fire
Harry Potter and The Philosopher's Stone
Lord of The Rings: The Fellowship of The Ring
*/

//C.While Loop

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

/*
Output:
1
2
3
4
5
6
7
8
9
10
*/

//D.While Loop
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 100);

/*
Output:
1
2
3
4
5
6
7
8
9
10
*/

