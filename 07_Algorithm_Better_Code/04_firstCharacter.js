// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴해야 합니다.

function firstCharacter(str) {
  if (str.length === 0) {
    return '';
  }
  return str.split(' ').reduce(function(acc, val) {
    return acc.concat(val[0]);
  }, '');
}

// function firstCharacter(str) {
//   if (str.length === 0) {
//     return '';
//   }
//   let splitStr = str.split(' ');
//   let strFirstChars = '';
//   for (let i = 0; i < splitStr.length; i++) {
//     strFirstChars = strFirstChars.concat(splitStr[i][0]);
//   }
//   return strFirstChars;
// }

/*** Linear Search === Sequential Search ***/
// function firstCharacter(str) {
//   if (str.length === 0) {
//     return '';
//   }
//   let strFirstChars = '';
//   for (let i = 0; i < str.length; i++) {
//     if (i === 0 || str[i-1] === ' ') {
//       strFirstChars += str[i];
//     }
//   }
//   return strFirstChars;
// }
