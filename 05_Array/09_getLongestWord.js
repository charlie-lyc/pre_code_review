function getLongestWord(str) {
  let longestWord = '';
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
