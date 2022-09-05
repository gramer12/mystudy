let 시 = 16;
let 분 = 30;

let 초 = 1;

const timerId = setInterval(() => {
  let a = 초 - 1 < 10 ? "0" + 초 : 초;
  let b = 분 < 10 ? "0" + 분 : 분;
  let c = 시 < 10 ? "0" + 시 : 시;

  // if (초 % 10 === 0) {
  //   let input = prompt("정지를 원하시면 y 아니면 다른 키를 입력해주세요.");
  //   if (input === "y") {
  //     clearInterval(timerId);
  //     console.log("종료완료");
  //   }
  //}

  console.log(`${c}:${b}:${a}  `);
  /*
  document.getElementById("hour").innerText = 시;
  document.getElementById("min").innerText = 분;
  document.getElementById("sec").innerText = 초;
*/
  document.querySelector(".hour").innerText = 시;
  document.querySelector(".min").innerText = 시;
  document.querySelector(".sec").innerText = 시;
  초++;
  if (60 <= 초) {
    초 = 0;
    분++;
    if (60 < 분) {
      분 = 0;
      시++;
      stopu++;
    }
  }
}, 1000);
