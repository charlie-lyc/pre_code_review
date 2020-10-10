// 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열의 길이를 리턴해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 0을 리턴해야 합니다.

function getLengthOfLongestElement(arr) {
  return arr.reduce(function(acc, str) {
    if (acc < str.length) {
      return str.length;
    }
    return acc;
  }, 0);
}
