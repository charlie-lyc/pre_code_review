// 배열을 입력받아 순서가 뒤집힌 배열을 리턴해야 합니다.

function reverseArr(arr) {
  if (arr.length === 0) {
    return [];
  }
  return reverseArr(arr.slice(1)).concat(arr[0]);
}

// function reverseArr(arr) {
//   if (arr.length === 0) {
//     return [];
//   }
//   let head = arr.slice(0, arr.length - 1);
//   let tail = arr.slice(arr.length - 1)
//   return tail.concat(reverseArr(head));
// }

// function reverseArr(arr) {
//   if (arr.length === 0) {
//     return [];
//   }
//   return arr.slice(arr.length-1).concat(reverseArr(arr.slice(0, arr.length-1)));
// }
