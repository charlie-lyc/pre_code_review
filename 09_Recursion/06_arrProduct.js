// 배열을 입력받아 모든 요소의 곱을 리턴해야 합니다.

function arrProduct(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * arrProduct(arr.slice(1));
}

/* logic의 효율성 측면에서 이 경우가 더 유리 하다. */
// function arrProduct(arr) {
//   if (arr.length === 0) {
//     return 1;
//   } else if (arr.indexOf(0) !== -1) {
//     return 0;
//   }
//   return arr[0] * arrProduct(arr.slice(1));
// }
