// 문자열을 입력받아 문자열에 존재하는 각 단어의 개수 정보를 담은 객체를 리턴해야 합니다.
// str은 string 타입의 공백이 있는 문자열, str[i]는 알파벳 또는 공백
// 각 단어(소문자 형태)를 키로 하고, 각 단어의 개수를 값으로 하는 객체를 리턴해야 합니다.
// 단어는 공백을 제외한 연속된 알파벳 문자열로 정의합니다. 공백은 한 칸 이상입니다.
// 단어가 존재하지 않는 경우, 빈 객체를 리턴해야 합니다.
// 대소문자를 구분하지 않습니다. str.trim 사용은 금지됩니다.

function test1(str) {
  const wordsArr = str.split(' ');
  const filterArr = wordsArr.filter(function(word) {
    return word !== '';
  });
  if (filterArr.length === 0) {
    return {};
  }

  const lowerWords = filterArr.map(function(word) {
    return word.toLowerCase();
  });

  return lowerWords.reduce(function(acc, word) {
    if (!(word in acc)) {
      acc[word] = 1;
    } else {
      acc[word] ++;
    }
    return acc;
  }, {});
}
