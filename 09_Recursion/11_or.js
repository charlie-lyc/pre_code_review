// 배열을 입력받아 모든 요소의 논리합(or)을 리턴해야 합니다.

function or(arr) {
  if (arr.length === 0) {
    return false;
  }
  return arr[0] || or(arr.slice(1));
}

// function or(arr) {
//   if (arr.length === 0) {
//     return false;
//   }
//   if (arr[0]) {
//     return true;
//   }
//   return or(arr.slice(1));
// }
