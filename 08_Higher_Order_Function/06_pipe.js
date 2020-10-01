// 함수들을 입력받아 함수들이 입력된 차례대로 결합된 새로운 함수를 리턴해야 합니다.
/* ES5 */
function pipe() {
  let args = pipe.arguments;
  return function(number) {
    let result = number;
    for (let i = 0; i < args.length; i++) {
      result = args[i](result);
    }
    return result;
  }
}

/* ES6 - Refactoring */
// function pipe(...funcArr) {
//   return function(number) {
//     let result = number;
//     for (let i = 0; i < funcArr.length; i++) {
//       result = funcArr[i](result);
//     }
//     return result;
//   }
// }

/* ES6 - Spread Operator */
// function pipe(...funcArr) {
//   return function(number) {
//     let result;
//     for (let i = 0; i < funcArr.length; i++) {
//       if (i === 0) {
//         result = funcArr[i](number);
//       } else {
//         result = funcArr[i](result);
//       }
//     }
//     return result;
//   }
// }