console.log();
const myPrint = (...data) => {
  let prin = "";
  for (const iterator of data) {
    prin += iterator + " ";
  }
  console.log(prin);
  console.log(...data);
};
myPrint("선문대", "졸업", "시켜줘");
console.log("선문대", "졸업", "시켜줘");
// const min = (...items) => {
//   console.log(items);
// };
// console.log("asd", "teqwe", "eqwfsa", "weqwt00");
// console.log(min(10, 20, 30, 40, 506, 10, 20));
// const min = (arr) => {
//   let min = arr[0];

//   for (const value of arr) {
//     if (min > value) min = value;
//   }
//   return min;
// };
// const max = (arr) => {
//   let max = arr[0];

//   for (const value of arr) {
//     if (max < value) max = value;
//   }
//   return max;
// };

// const input = [10, 5, 20, 100];

// console.log(min(input));
// console.log(max(input));

// const isLeapYear = (year) =>
//   (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

// console.log(`2020년은 윤년일까?  === ${isLeapYear(2020)}`);
// console.log(`2010년은 윤년일까?  === ${isLeapYear(2010)}`);
// console.log(`1900년은 윤년일까?  === ${isLeapYear(1900)}`);

// function main(a, b, c) {
//   console.log(`a값은 ${a} 입니다.`);
//   console.log(`b값은 ${b} 입니다.`);
//   console.log(`c값은 ${c} 입니다.`);
// }

// main(10, 20, 30, 40, 50);

// const main2 = function (a, b, c) {
//   console.log(`${a},${b},${c}`);
// };

// main2(30, 20, 10);
// const main3 = (a, b, c) => {
//   console.log(`${a},${b},${c}`);
// };
// main3(2, 3, 4);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 5));
// const sum2 = function (a, b) {
//   return a + b;
// };
// console.log(sum2(4, 6));
// const sum3 = (a, b) => {
//   return a + b;
// };
// console.log(sum3(1, 3));
// const sum4 = (a, b) => a + b;
// console.log(prompt("입력하세요"));
// console.log(confirm("고기가먹고싶군"));

// main3();
// main();
// main();
// console.log(typeof main);
// console.log(typeof 1234);
// console.log(typeof "1234");
// console.log(typeof [1, 2, 3, 4]);
// const obj = { a: 1, b: 2, c: 3 };
// console.log(typeof obj);
// console.log(typeof 123.23);
// console.log(console.log);
