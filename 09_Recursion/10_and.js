// 배열을 입력받아 모든 요소의 논리곱(and)을 리턴해야 합니다.

function and(arr) {
  if (arr.length === 0) {
    return true;
  }
  return arr[0] && and(arr.slice(1));
}

// function and(arr) {
//   if (arr.length === 0) {
//     return true;
//   }
//   if (!arr[0]) {
//     return false;
//   }
//   return and(arr.slice(1));
// }
