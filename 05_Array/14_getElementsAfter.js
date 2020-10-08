// 배열과 인덱스를 입력받아 주어진 인덱스 이후의 요소들을 갖는 새로운 배열을 리턴해야 합니다.

function getElementsAfter(arr, n) {
  return arr.slice(n + 1);
}

/**
 * "slice()" 메소드의 정의에 이미 예외 조건이 포함되어 요구 조건대로 처리가 된다.
 */

// function getElementsAfter(arr, n) {
//   if (arr.length === 0 || n >= arr.length) {
//     return [];
//   }
//   return arr.slice(n+1);
// }
