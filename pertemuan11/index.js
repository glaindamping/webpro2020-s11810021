 // Arrow Function
/*
Di Javascript ES6, ada cara baru dalam penulisan sebuah fungsi, yaitu menggunakan arrow function.
Kelebihan menggunakan arrow function adalah penulisan fungsi menjadi lebih singkat dan lebih mudah dibaca.
*/
// 1. fungsi dengan parameter
// const operasiPenjumlahan = (bilangan1, bilangan2) =>
//   {
//     const hasil =  bilangan1 + bilangan2;
//     return hasil;
//   };
//   const operasiPengurangan = (bilangan1, bilangan2) =>
//   {
//     const hasil =  bilangan1 - bilangan2;
//     return hasil;
//   };
//   console.log(operasiPenjumlahan(3, 4)); // Output: 7
//   console.log(operasiPengurangan(10,5)); // output: 5

// // 2. fungsi yang tidak memiliki parameter
// const namaJenisAnjing = () => 
//   {
//     const anjing = ["Pug", "Bulldog", "Poodle"];
//     return anjing[Math.floor(Math.random()*(anjing.length))];
//   }
// const jenisAnjing2 = () => 
//   {
//     const anjing = ["Pomerian", "Retriver", "Siberian"];
//     return anjing[Math.floor(Math.random()*(anjing.length))];
//   }
//   console.log(namaJenisAnjing()); // Output:  (hasil random)
//   console.log(jenisAnjing2()); // Output:  (hasil random)

// Arrow Function

//Single Argument
// const calcAge = (year) => {
//   return 2020 - year;
// }

// console.log(calcAge(1991));

//Multiple Argument
// const calcAge = (birthYear, currentYear) => {
//   return currentYear - birthYear;
// };

//No Argument with implicit return value
// const calcAge = () => 2020 - 1992;
// console.log(calcAge());

// const years = [1990, 1992, 2001, 2005];

// const calcAge5 = years.map(function (el)
// {
//   return 2020 - el;
// });

// const calcAge6 = years.map((el)) => 2020 - el);
// console.log(calcAge6)

