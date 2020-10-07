// 배열을 입력받아 배열의 모든 요소의 합을 리턴해야 합니다.

function computeSumOfAllElements(arr) {
  let sumOfAll = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfAll += arr[i];
  }
  return sumOfAll;
}

// function computeSumOfAllElements(arr) {
//   return arr.reduce(function(acc, val) {
//     return acc + val;
//   }, 0);
// }
