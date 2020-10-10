// 배열을 입력받아 모든 요소의 논리합(or)을 리턴해야 합니다.
// 함수 or는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 빈 배열의 논리합은 false 입니다.

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
