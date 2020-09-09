function findMinLengthOfThreeWords(word1, word2, word3) {
  let lengthOfWords = [word1.length, word2.length, word3.length];
  let indexOfWord = lengthOfWords.indexOf(Math.min.apply(null, lengthOfWords));
  return lengthOfWords[indexOfWord];
}
