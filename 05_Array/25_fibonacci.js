// 수(num)를 입력받아 num번째까지 총 num + 1개의 피보나치 수열을 리턴해야 합니다.
// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
// 배열을 리턴해야 합니다.

function fibonacci(num) {
  let fibo = [];
  for (let i = 0; i < num + 1; i ++) {
    if (i === 0 || i === 1) {
      fibo.push(i);
    } else {
      fibo.push(result[i-2] + result[i-1]);
    }
  }
  return fibo;
}

// function fibonacci(num) {
//   let fibo = [];
//   for (let i = 0; i < num+1; i++) {
//     if (i === 0) {
//       fibo.push(0);
//     } else if (i === 1) {
//       fibo.push(1);
//     } else {
//       fibo.push(fibo[i-2] + fibo[i-1]);
//     }
//   }
//   return fibo;
// }
