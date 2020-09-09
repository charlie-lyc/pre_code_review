function findShortestOfThreeWords(word1, word2, word3) {
  let lengthOfWords = [word1.length, word2.length, word3.length];
  let indexOfWord = lengthOfWords.indexOf(Math.min.apply(null, lengthOfWords));
  if (indexOfWord === 0) {
    return word1;
  } else if (indexOfWord === 1) {
    return word2;
  } else {
    return word3;
  }
}
