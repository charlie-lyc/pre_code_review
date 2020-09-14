function countAllCharacters(str) {
  if (str.length === 0) {
    return {};
  }
  let countOfChars = {};
  for (let i = 0; i < str.length; i ++) {
    if (!(str[i] in countOfChars)) {
      countOfChars[str[i]] = 1;
    } else {
      countOfChars[str[i]] ++;
    }
  }
  return countOfChars;
}
