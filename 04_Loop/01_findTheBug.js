// 문자열을 입력받아 버그('#')의 인덱스를 리턴해야 합니다.

function findTheBug(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '#') {
      return i;
    }
  }
}
