// 세 개의 단어를 입력받아 그 중 가장 짧은 단어의 길이를 리턴해야 합니다.

function findMinLengthOfThreeWords(word1, word2, word3) {
  return Math.min(word1.length, word2.length, word3.length);
}

// function findMinLengthOfThreeWords(word1, word2, word3) {
//   let lengthOfWords = [word1.length, word2.length, word3.length];
//   let indexOfWord = lengthOfWords.indexOf(Math.min.apply(null, lengthOfWords));
//   return lengthOfWords[indexOfWord];
// }
