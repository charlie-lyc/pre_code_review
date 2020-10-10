// 문자열을 요소로 갖는 배열을 입력받아 그 길이가 홀수인 요소만을 갖는 배열을 리턴해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.
// arr.indexOf, arr.splice, arr.slice, arr.forEach 등의 사용은 금지됩니다.
// 반드시 arr.filter를 이용해서 풀어야 합니다.

function filterOddLengthWords(words) {
  return words.filter(function(word) {
    return word.length % 2 === 1;
  });
}
