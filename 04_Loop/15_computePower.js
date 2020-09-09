/*** 초기화 값을 잘 정하면 훨씬 심플하게 만들 수 있다. ***/
function computePower(base, exponent) {
  let result = 1;
  for (let i = 1; i < exponent+1; i++) {
    result = result * base;
  }
  return result;
}
