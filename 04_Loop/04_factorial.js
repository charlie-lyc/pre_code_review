// 수 n을 입력받아 factorial(n!) 값을 리턴해야 합니다.

/*** 초기화 값을 잘 정하면 훨씬 심플하게 만들 수 있다. ***/
function factorial(num) {
  let factoToNum = 1;
  for (let i = 1; i < num + 1; i++) {
    factoToNum *= i;
  }
  return factoToNum;
}

/** 초기화의 중요성 :
 * "let factoToNum = 1;"로 초기화 해두었기 때문에
 * "num === 0"일 경우 for loop가 작동되지 않고 그 결과 "1"을 반환하게 된다.
 * 따라서 "num === 0"일 경우에 대한 예외 처리가 필요 없다.
 */

// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   }
//   let factoToNum = 1;
//   for(let i = 1; i < num + 1; i ++) {
//     factoToNum = factoToNum * i;
//   }
//   return factoToNum;
// }
