function countAllCharacters(str) {
  let countOfChars = {};
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count ++;
      }
    }
    countOfChars[str[i]] = count;
  }
  return countOfChars;
}
