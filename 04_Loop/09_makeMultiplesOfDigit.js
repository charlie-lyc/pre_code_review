/*** 초기화 값을 잘 정하면 훨씬 심플하게 만들 수 있다. ***/
function makeMultiplesOfDigit(num) {
  let madeMultiplesDigit = '';
  for (let i = 3; i < num+1; i += 3) {
    madeMultiplesDigit = madeMultiplesDigit + String(i);
  }
  return madeMultiplesDigit;
}
