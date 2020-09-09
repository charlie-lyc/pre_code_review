function makeOddDigits(num) {
  let madeOddDigits = '';
  let oddDigit = 1;
  let i = 1;
  while(i < num+1) {
    i ++;
    madeOddDigits = madeOddDigits + String(oddDigit);
    oddDigit = oddDigit + 2;
  }
  return madeOddDigits;
}
