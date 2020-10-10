// 수를 입력받아 홀수인지 여부를 리턴해야 합니다.
// 함수 isOdd는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// 0은 짝수로 간주합니다.

function isOdd(num) {
  let absNum = Math.abs(num);
  if (absNum === 1) {
    return true;
  } else if (absNum === 0) {
    return false;
  }
  return isOdd(absNum - 2);
}

// function isOdd(num) {
//   if (num === 1 || num === -1) {
//     return true;
//   } else if (num === 0) {
//     return false;
//   }
//   if (num > 1) {
//     return isOdd(num - 2);
//   } else if (nem < -1) {
//     return isOdd(num + 2);
//   }
// }
