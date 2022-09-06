const arr = [2, 4, 6, 8, 10];
("use strict");
data = 100;
console.log(data);
const sum = (arr) => {
  let sum = 0;
  for (const iterator of arr) {
    sum += iterator;
  }
  console.log(sum);
  return sum;
};
sum(arr);

const reducefn = (acc, cur, idx, src) => {
  console.log(`aac:${acc}/cur:${cur}/idx:${idx}/src:${src}`);
  return acc + cur;
};
const result = arr.reduce(reducefn, 0);
console.log(result);
// const arr = [
//   "강석원",
//   "박종훈",
//   "윤승준",
//   "이슬비",
//   "이정운",
//   "이종석",
//   "이진우",
//   "정효택",
//   "정도현",
//   "최도원",
//   "최승준",
// ];

// const arr1 = ["sf", "asfsa", "fasf", "asf", "d"];
// arr.reverse();
// //arr.pop();
// //arr.pop();

// // const filterfn = (value, index, arr) => {
// //   //console.log(`[${index}] ${value}`);
// //   if (arr[index].indexOf("이") === 0) {
// //     //console.log(value + "1");
// //     return true;
// //   } else return false;
// // };

// // const filterfn = (value, index, arr) => {
// //   //console.log(`[${index}] ${value}`);
// //   if (arr[index].indexOf("우") === 2) {
// //     //console.log(value + "1");
// //     return true;
// //   } else return false;
// // };
// //const filterResult = arr.filter(filterfn);
// console.log(arr);

// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filterfn = (value, index, arr) => {
//   console.log(`[${index}] ${value}`);
//   if (value % 2 === 0) return true;
//   else return false;
// };
// const filterResult = arr.filter(filterfn);
// console.log(filterResult);

// const sunmoonfn = (value, index, arr) => {
//   console.log(`[${index}] ${value}`);
//   return value * value;
// };

// const mapResult = arr.map(sunmoonfn);
// console.log(mapResult);
