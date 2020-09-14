
function mostFrequentCharacter(str) {
  // 빈 문자열 입력시
  if (str.length === 0) {
    return '';
  }
  // 최대 빈도수 찾기
  let maxNumber = 0;
  let countOfChars = {};
  for (let i = 0; i < str.length; i ++) {
    if (str[i] !== ' ' && !(str[i] in countOfChars)) {
      countOfChars[str[i]] = 1;
    } else if (str[i] !== ' ' && str[i] in countOfChars){
      countOfChars[str[i]] ++;
    }
    if (countOfChars[str[i]] > maxNumber) {
      maxNumber = countOfChars[str[i]];
    }
  }
  // 공백으로만 이루어진 문자열 입력시
  if (maxNumber === 0) {
    return '';
  }
  // 가장 빨리 최대 빈도수에 도달하는 문자 찾기
  let countOfLetters = {};
  for (let i = 0; i < str.length; i ++) {
    if (str[i] !== ' ' && !(str[i] in countOfLetters)) {
      countOfLetters[str[i]] = 1;
    } else if (str[i] !== ' ' && str[i] in countOfLetters){
      countOfLetters[str[i]] ++;
    }
    if (countOfLetters[str[i]] === maxNumber) {
      return str[i];
    }
  }
}
