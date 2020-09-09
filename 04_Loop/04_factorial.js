/*** 초기화 값을 잘 정하면 훨씬 심플하게 만들 수 있다. ***/
function factorial(num) {
  let factoToNum = 1;
  for (let i = 1; i < num+1; i++) {
    factoToNum = factoToNum * i;
  }
  return factoToNum;
}
