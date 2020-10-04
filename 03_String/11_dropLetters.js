// 수(num)와 문자열을 입력받아 차례대로 num개의 문자가 제거된 문자열을 리턴해야 합니다.

/** "substring(start, end)"내에 이미 num에 대한 조건이 포함되어 있다.
 * start : 음수일 경우 0으로 대신한다.
 * end : 입력값이 없거나 인덱스(.length값)보다 클 경우, .length값으로 대신한다.
 */
function dropLetters(num, str) {
  return str.substring(num);
}
