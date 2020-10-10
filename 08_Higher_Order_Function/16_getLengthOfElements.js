// 문자열을 요소로 갖는 배열을 입력받아 각 요소의 길이를 요소로 갖는 새로운 배열을 리턴해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 반드시 arr.map를 이용해서 풀어야 합니다.

function getLengthOfElements(arr) {
  return arr.map(function(str) {
    return str.length;
  });
}
