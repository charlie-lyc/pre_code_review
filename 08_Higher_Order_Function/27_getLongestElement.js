// 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열을 리턴해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 가장 긴 문자열이 중복이 될 경우, 앞 쪽에 있는 요소를 리턴해야 합니다.
// 빈 배열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

function getLongestElement(arr) {
  return arr.reduce(function(acc, str) {
    if (acc.length < str.length) {
      return str;
    }
    return acc;
  }, '');
}
