// 차례대로 문자열 3개를 입력받아, 가장 짧은 문자열을 리턴해야 합니다.

function findShortestOfThreeWords(word1, word2, word3) {
  if (word1.length <= word2.length && word1.length <= word3.length) {
    return word1;
  } else if (word2.length < word1.length && word2.length <= word3.length) {
    return word2;
  } else if (word3.length < word1.length && word3.length < word2.length) {
    return word3;
  }
}

// function findShortestOfThreeWords(word1, word2, word3) {
//   let lengthOfWords = [word1.length, word2.length, word3.length];
//   let indexOfWord = lengthOfWords.indexOf(Math.min.apply(null, lengthOfWords));
//   if (indexOfWord === 0) {
//     return word1;
//   } else if (indexOfWord === 1) {
//     return word2;
//   }
//   return word3;
// }
