// 수(num)를 입력받아 1을 포함하여 num개의 홀수로 구성된 문자열을 리턴해야 합니다.

function makeOddDigits(num) {
  let madeOddDigits = ''
  let oddDigit = 1;
  let i = 0;
  while (i < num) {
    madeOddDigits = result.concat(String(oddDigit));
    oddDigit += 2;
    i ++;
  }
  return madeOddDigits;
}

// function makeOddDigits(num) {
//   let madeOddDigits = '';
//   let oddDigit = 1;
//   let i = 1;
//   while(i < num + 1) {
//     madeOddDigits += String(oddDigit);
//     oddDigit += 2;
//     i ++;
//   }
//   return madeOddDigits;
// }
