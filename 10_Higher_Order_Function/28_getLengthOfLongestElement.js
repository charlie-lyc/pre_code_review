// 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열의 길이를 리턴해야 합니다.
function getLengthOfLongestElement(arr) {
  let longestStr = arr.reduce(function(acc, val) {
    if (acc.length < val.length) {
      return val;
    }
    return acc;
  }, '');
  return longestStr.length;
}