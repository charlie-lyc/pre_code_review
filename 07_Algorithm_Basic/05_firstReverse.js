// 문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.

function firstReverse(str) {
  return str.split('').reverse().join('');
}

// function firstReverse(str) {
//   let reverseStr = '';
//   for (let i = str.length - 1; i > -1; i--) {
//     reverseStr += str[i];
//   }
//   return reverseStr;
// }

/**
 * "reverse()" 메소드를 이용하면 배열을 역순으로 뒤집을 수 있다.
 */
