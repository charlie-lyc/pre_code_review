// 문자열을 입력받아 문자열에서 가장 긴 단어를 리턴해야 합니다.

function getLongestWord(str) {
  return str.split(' ').reduce(function(acc, val) {
    if (acc.length < val.length) {
      acc = val;
    }
    return acc;
  }, '');
}

// function getLongestWord(str) {
//   let longestWord = '';
//   let words = str.split(' ');
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }
