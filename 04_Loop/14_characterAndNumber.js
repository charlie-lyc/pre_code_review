// 문자열을 입력받아 각 문자(letter) 뒤에 해당 문자의 인덱스가 추가된 문자열을 리턴해야 합니다.

function characterAndNumber(word) {
  let result = '';
  for (let i = 0; i < word.length; i ++){
    result = result.concat(word[i] + String(i));
  }
  return result;
}

// function characterAndNumber(word) {
//   let arrayOfWord = word.split('');
//   let madeString = '';
//   for (let i = 0; i < word.length; i++) {
//     madeString = madeString + word[i] + String(i);
//   }
//   return madeString;
// }
