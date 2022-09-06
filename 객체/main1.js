const products = [
  {
    제품명: "탐사수",
    가격: 500,
    무개: 50,
  },
  {
    제품명: "화장지",
    가격: 250,
    무개: 10,
  },
  {
    제품명: "모니터",
    가격: 100000,
    무개: 200,
  },
  {
    제품명: "마우스",
    가격: 12000,
    무개: 40,
  },
];

const compare = (a, b) => {
  console.log("---------");
  console.log("a " + JSON.stringify(a));
  console.log("b " + JSON.stringify(b));
  if (a.가격 < b.가격) {
    return -1;
  }
  if (a.가격 > b.가격) {
    return 1;
  }

  return 0;
};

const months = ["!", "mar"];
const sortResult = months.sort(compare);
console.log(sortResult);

const sortResult2 = products.sort(compare);
console.log(sortResult2);
