function makeDigits(num) {
  let madeDigits = '';
  for (let i = 1; i < num+1; i++) {
    madeDigits = madeDigits + String(i);
  }
  return madeDigits;
}
