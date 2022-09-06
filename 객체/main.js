const name = "망고";
const price = 10000;
const site = {
  사이트명: "네이버",
  url: "https://naver.com",
};
const product = {
  상품번호: "6660402029",
  상품상태: "신상품",
  제조사: "로지텍",
  모델명: "로지텍213",
  브랜드: "로지텍",
  "휠 조정": "상하",
  옵션명: ["1개", "2개", "3개"],
  중량: ["100g", "200g", "300g"],
  판매처: site,
};

String.prototype.toPrint = function () {
  console.log("[2022-9-6" + this.valueOf());
};
const arr = [10, 20, 40, 5, 2];

console.log(Math.floor(Math.random() * 1000) * 0.01);
// const str = "   동해물과 백두산이 마르고 닳도록";
// console.log(str.trim()5);
// console.log(str.split(" "));
// const products = [product, product, product, product, product, product];
// console.log(products);

// const 내쇼핑물 = {
//   제품들: product,
// };
// console.log(내쇼핑물);

// console.printf = function (str) {
//   console.log("[INFO]" + str);
// };
// console.printf("hello world");

// console.myName = "홍길동";
// console.log(console.myName);
// delete console.log;
// console.log("ad");
// product.고객센터 = "1588-1588";
// delete product.브랜드;
// console.log(product);
// console.log(typeof product);

// const json = JSON.stringify(product, null, 4);
// const obj = JSON.parse(json);
// console.log(product);
// console.log(json);
// console.log(obj);
// console.log(product.상품번호);
// console.log(product.상품상태);
// console.log(product.브랜드);
// console.log(product["휠 조정"]);
// console.log(product.판매처.url);
// product.printBrand("윤승준");
// product.printModel("윤승준");
// console.log(product.제품명);
// console.log(product["제품명"]);
// console.log(product.const);
// console.log(product[1234]);
