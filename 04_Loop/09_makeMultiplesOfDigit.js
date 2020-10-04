// 수를 입력받아 1부터 해당 수까지의 수 중에서 3의 배수로만 구성된 문자열을 리턴해야 합니다.

/*** 초기화 값을 잘 정하면 훨씬 심플하게 만들 수 있다. ***/
function makeMultiplesOfDigit(num) {
  let madeMultiplesDigit = '';
  for (let i = 3; i < num+1; i += 3) {
    madeMultiplesDigit += String(i);
  }
  return madeMultiplesDigit;
}

// function makeMultiplesOfDigit(num) {
//   let madeMultiplesDigit = '';
//   for (let i = 1; i < num + 1; i ++) {
//     if (i % 3 === 0) {
//       madeMultiplesDigit = madeMultiplesDigit.concat(String(i));
//     }
//   }
//   return madeMultiplesDigit;
// }
