// 수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다.

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

/** 분명 위와 아래의 결과는 같다. 하지만 num이 큰 정수라면 로직의 효울을 생각해 봐야 한다.
 * 나눈 나머지가 0인 경우를 셀 때, 1부터 num까지 진행되지 않은 상태에서 이미 그 수가 2를 넘는다면
 * 더이상 나누기를 지속해 볼 필요가 없다.
 */
 
// function listPrimes(num) {
//   let stringPrimes = '2';
//   for (let i = 3; i < num + 1; i ++) {
//     let count = 0;
//     for (let j = 1; j < num + 1; j ++) {
//       if (i % j === 0) {
//         count ++;
//       }
//     }
//     if (count === 2) {
//       stringPrimes = stringPrimes.concat('-' + String(i));
//     }
//   }
//   return stringPrimes;
// }
