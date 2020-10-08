// 배열을 입력받아 가장 큰 요소를 리턴해야 합니다.

function getLargestElement(arr) {
  return Math.max(...arr);
}

// function getLargestElement(arr) {
//   return Math.max.apply(null, arr);
// }

// function getLargestElement(arr) {
//   // 초기화 값 설정의 편리함
//   let maxNumber = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i];
//     }
//   }
//   return maxNumber;
// }
