// 문자열을 입력받아 문자열을 구성하는 각 단어를 요소로 갖는 배열을 리턴해야 합니다.

function getAllWords(str) {
  if (str.length === 0 ) {
    return [];
  }
  return str.split(' ');
}
