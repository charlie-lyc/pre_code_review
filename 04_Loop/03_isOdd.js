// 수를 입력받아 홀수인지 여부를 리턴해야 합니다.

function isOdd(num) {
  let absNum = Math.abs(num);
  while (absNum > 1) {
    absNum = absNum - 2;
  }
  if (absNum === 1) {
    return true;
  }
  return false;
}

// function isOdd(num) {
//   while(true) {
//     if (num === 1 || num === -1) {
//       return true;
//     } else if (num === 0){
//       return false;
//     }
//     if (num > 0) {
//       num = num - 2;
//     } else if (num < 0) {
//       num = num + 2;
//     }
//   }
// }
