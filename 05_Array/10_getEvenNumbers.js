// 수를 요소로 갖는 배열을 입력받아 짝수만을 요소로 갖는 배열을 리턴해야 합니다.

function getEvenNumbers(arr) {
  return arr.filter(function(ele) {
      return ele % 2 === 0;
  });
}

// function getEvenNumbers(arr) {
//   let evenNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNumbers.push(arr[i]);
//     }
//   }
//   return evenNumbers;
// }
