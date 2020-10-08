// 배열을 입력받아 마지막 요소를 제외한 배열을 리턴해야 합니다.

function getAllElementsButLast(arr) {
  return arr.slice(0, arr.length - 1);
}

// function getAllElementsButLast(arr) {
//   arr.pop()
//   return arr;
// }
