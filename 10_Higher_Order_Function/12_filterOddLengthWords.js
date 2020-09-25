// 문자열을 요소로 갖는 배열을 입력받아 그 길이가 홀수인 요소만을 갖는 배열을 리턴해야 합니다.
function filterOddLengthWords(words) {
  if (words.length === 0) {
    return [];
  }
  let newArr = [];
  words.forEach(function(word) {
    if (word.length % 2 === 1) {
      newArr.push(word);
    }
  });
  return newArr;
}