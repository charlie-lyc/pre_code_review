// 함수들을 입력받아 함수들이 입력된 차례대로 결합된 새로운 함수를 리턴해야 합니다.
// 리턴되는 함수는 정수를 입력받아 func1, func2, ..., funcN의 순으로 적용합니다.
// 입력되는 함수들의 수는 1개 이상이라고 가정합니다.
// 함수가 아닌 입력은 존재하지 않는다고 가정합니다.

function pipe(...args) {
  return function(num) {
    return args.reduce(function(acc, val) {
      if (typeof acc === 'function') {
        return val(acc(num));
      }
      return val(acc);
    });
  };
}

////////////////////////////////////////////////////////////////////////////////

/* ES5 */
// function pipe() {
//   let args = pipe.arguments;
//   return function(number) {
//     let result = number;
//     for (let i = 0; i < args.length; i++) {
//       result = args[i](result);
//     }
//     return result;
//   }
// }

/* ES6 */
// function pipe(...funcArr) {
//   return function(number) {
//     let result = number;
//     for (let i = 0; i < funcArr.length; i++) {
//       result = funcArr[i](result);
//     }
//     return result;
//   }
// }
