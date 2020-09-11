
function mostFrequentCharacter(str) {
  // 빈 문자열 입력시
  if (str.length === 0) {
    return '';
  }
  // 공백으로만 이루어진 문자열 입력시
  let check = 0;
  for (let h = 0; h < str.length; h++) {
    if (str[h] == ' ') {
      check ++;
    }
  }
  if (check === str.length) {
    return '';
  }
  // 각 문자별 빈도수 측정을 위한 객체 카운터
  let countOfChars = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count ++;
      }
    }
    countOfChars[str[i]] = count;
  }
  // 최대 빈도수 결정
  let maxNumber = 0;
  for (let key in countOfChars) {
    if (countOfChars[key] > maxNumber) {
      maxNumber = countOfChars[key];
    }
  }
  // 가장 빠르게 최대 빈도수가 되는 문자를 찾기 위한 객체 카운터
  let countOfLetters = {};
  for (let key in countOfChars) {
    countOfLetters[key] = 0;
  }
  // 가장 빠르게 최대 빈도수가 되는 문자 찾기
  for (let l = 0; l < str.length; l++) {
    if (str[l] !== ' ') {
      countOfLetters[str[l]] ++;
      if (countOfLetters[str[l]] === maxNumber) {
        return str[l];
      }
    }
  }

}
