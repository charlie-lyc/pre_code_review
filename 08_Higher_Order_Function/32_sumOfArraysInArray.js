// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 모든 수(number)의 합을 리턴해야 합니다.
// arr[i]는 임의의 타입을 요소로 갖는 배열
// 합을 구할 때 number 타입만 고려해야 합니다.

function sumOfArraysInArray(arr) {
  return arr.reduce(function(acc, ar) {
      return acc + ar.reduce(function(ac, val) {
        if (typeof val === 'number') {
          return ac + val;
        }
        return ac;
      }, 0);
  }, 0);
}

/* "flat()"메소드 사용해 보기 */
// function sumOfArraysInArray(arr) {
//   // 2차원 배열을 1차원 배열로 바꾸기
//   let concatenatedArr = arr.flat();
//   // 데이터타입이 'number'가 아닌 경우 제외하기
//   let onlyNumbers = concatenatedArr.filter(function(element) {
//     return (typeof element === 'number');
//   });
//   // 모든 숫자들의 합을 구하여 반환
//   return onlyNumbers.reduce(function(acc, val) {
//     return acc + val;
//   }, 0);
// }

/* 문제 해결방법을 통째로 생각하지말고 나누어 보기 */
// function sumOfArraysInArray(arr) {
//   // 2차원 배열을 1차원 배열로 바꾸기
//   let concatenatedArr = arr.reduce(function(acc, val) {
//     return acc.concat(val);
//   });
//   // 데이터타입이 'number'가 아닌 경우 제외하기
//   let onlyNumbers = concatenatedArr.filter(function(element) {
//     return (typeof element === 'number');
//   });
//   // 모든 숫자들의 합을 구하여 반환
//   return onlyNumbers.reduce(function(acc, val) {
//     return acc + val;
//   }, 0);
// }

/* 2중 for loop를 이용한 해결 방법 */
// function sumOfArraysInArray(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i ++) {
//     for (let j = 0; j < arr[i].length; j ++) {
//       if (typeof arr[i][j] === 'number') {
//         result += arr[i][j];
//       }
//     }
//   }
//   return result;
// }
