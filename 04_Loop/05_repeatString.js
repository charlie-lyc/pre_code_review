// 문자열과 수를 입력받아 반복된 문자열을 리턴해야 합니다.

function repeatString(str, num) {
  let result = '';
  for (let i = 0; i < num; i ++) {
    result = result.concat(str);
  }
  return result;
}

/** 초기화의 중요성 :
 * "let repeatedString = '';"로 초기화 해두었기 때문에
 * "num === 0"일 경우 for loop가 작동되지 않고 초기값을 반환하게 된다.
 * 따라서 "num === 0"일 경우에 대한 예외 처리가 필요 없다.
 */

// function repeatString(str, num) {
//   let repeatedString = '';
//   for (let i = 0; i < num; i++) {
//     repeatedString += str;
//   }
//   return repeatedString;
// }
