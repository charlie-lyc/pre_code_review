// 수(num)와 문자열을 입력받아 차례대로 num개의 문자로 구성된 문자열을 리턴해야 합니다.

/* "substring(<start>, <end>)""내에도 이미 num에 대한 조건이 포함되어 있다. */
function takeLetters(num, str) {
  return str.substring(0, num);
}

/** "slice(<start>, <end>)"내에 이미 num에 대한 조건이 포함되어 있다.
 * <start>
 * 1. 음수일 경우 0으로 대신한다.
 * +@ 인덱스(.length값)보다 클 경우 <end>값이 없으면 결과값은 없으며,
 *    <end>값이 있으면 그 조건(<start>값 기준으로 그 방향성과 범위)에 따라
 *    .length값으로 대신할 수도 있다. => 즉, 결과값이 있을 수도 있고 없을 수도 있다.
 * <end>
 * 1. 입력되는 값이 없을 경우 .length값으로 대신한다.
 * 2. 인덱스(.length값)보다 클 경우 .length값으로 대신한다.
 * +@ 음수일 경우 <start>값 기준으로 그 방향성과 범위에 따라
 *    0으로 대신할 수도 있다. => 즉, 결과값이 있을 수도 있고 없을 수도 있다.
 */
 
// function takeLetters(num, str) {
//   return str.slice(0, num);
// }

/* "substring()"는 String에 사용할 수 있다. */
// function takeLetters(num, str) {
//   if (num > str.length) {
//     num = str.length;
//   }
//   return str.substring(0, num);
// }

/* "slice()"는 Array, String 두 가지 모두에 사용할 수 있다. */
// function takeLetters(num, str) {
//   if (num > str.length) {
//     num = str.length;
//   }
//   return str.slice(0, num);
// }
