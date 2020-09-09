/*** 초기화 값을 잘 정하면 훨씬 심플하게 만들 수 있다. ***/
function makeDigits2(num) {
  let madeDigits = '1';
  let i = 2;
  while(i < num + 1) {
    madeDigits = madeDigits + '-' + String(i);
    i++;
  }
  return madeDigits;
}

// function makeDigits2(num) {
//   let madeDigits = '';
//   let i = 1;
//   while(i < num + 1) {
//     if (i === 1) {
//       madeDigits = madeDigits + String(i);
//     } else {
//       madeDigits = madeDigits + '-' + String(i);
//     }
//     i++;
//   }
//   return madeDigits;
// }
