// 수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴해야 합니다.

/*** 초기화 값을 잘 정하면 훨씬 심플하게 만들 수 있다. ***/
function makeDigits2(num) {
  let madeDigits = '1';
  let i = 2;
  while (i < num + 1) {
    madeDigits += '-' + String(i);
    i ++;
  }
  return madeDigits;
}

/** "while"루프도 "for" 루프의 변형된 개념이다.
 * let i = 2; while (i < num +1) { i ++; }
 * => for (let i = 2; i < num + 1; i++) { }
 */

/** 초기화의 중요성 :
 * "let madeDigits = '1';"로 초기화 해두었기 때문에
 * "num === 1"일 경우 while loop가 작동되지 않고 초기값을 반환하게 된다.
 * 따라서 "num === 1"일 경우에 대한 예외 처리가 필요 없다.
 * 거기에 더해 while loop 내의 구문을 간단하게 만들어 불필요한 코드를 줄일 수 있다.
 */

// function makeDigits2(num) {
//   let madeDigits = '';
//   let i = 1;
//   while (i <= num) {
//     if (i === 1) {
//       madeDigits = madeDigits.concat(String(i));
//     } else {
//       madeDigits = madeDigits.concat('-' + String(i));
//     }
//     i ++;
//   }
//   return madeDigits;
// }

// function makeDigits2(num) {
//   let madeDigits = '';
//   let i = 1;
//   while(i < num + 1) {
//     if (i === 1) {
//       madeDigits += String(i);
//     } else {
//       madeDigits += '-' + String(i);
//     }
//     i++;
//   }
//   return madeDigits;
// }
