/*** 초기화 값을 잘 정하면 훨씬 심플하게 만들 수 있다. ***/
function listPrimes(num) {
  let stringPrimes = '2';
  for (let i = 3; i < num+1; i++) {
    let count = 0;
    for (let j = 1; j < i+1; j++) {
      if (i % j === 0) {
        count ++;
        if (count > 2) {
          break;
        }
      }
    }
    if (count === 2) {
      stringPrimes = stringPrimes + '-' + String (i);
    }
  }
  return stringPrimes;
}
