// 수를 입력받아 소수(prime number)인지 여부를 리턴해야 합니다.

function isPrime(num) {
  let count = 0;
  for (let i = 1; i < num + 1; i ++) {
    if (num % i === 0) {
      count ++;
    }
  }
  return count === 2;
}

// function isPrime(num) {
//   let count = 0;
//   for (let i = 1; i < num+1; i++) {
//     if (num % i === 0) {
//       count ++;
//     }
//   }
//   if (count === 2) {
//     return true;
//   }
//   return false;
// }
