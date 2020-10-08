// 배열과 인덱스를 입력받아 해당 인덱스의 요소를 제외한 배열을 리턴해야 합니다.

function getAllElementsButNth(arr, n) {
  return arr.slice(0, n).concat(arr.slice(n + 1));
}

// function getAllElementsButNth(arr, n) {
//   let result = [];
//   for (let i = 0; i < arr.length; i ++) {
//     if (i !== n) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
