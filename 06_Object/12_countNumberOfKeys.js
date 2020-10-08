// 객체를 입력받아 속성의 개수를 리턴해야 합니다.

function countNumberOfKeys(obj) {
  return Object.keys(obj).length;
}

/**
 * 객체내 키들을 for loop로 순회하면서 key의 갯수를 구할수 있게 count가 작동
 */

// function countNumberOfKeys(obj) {
//   let count = 0;
//   for (let key in obj) {
//     count ++;
//   }
//   return count;
// }
