// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.
// 단어는 공백 한 칸으로 구분합니다.
// 연속된 공백이 존재할 수 있습니다.

function letterCapitalize(str) {
  if (str.length === 0) {
    return '';
  }
  let splitStrArr = str.split(' ');
  let trimAndCapitalizeArr = splitStrArr.map(function(ele) {
    let head = ele.trim().slice(0, 1).toUpperCase();
    let tail = ele.trim().slice(1);
    return head.concat(tail);
  });
  return trimAndCapitalizeArr.join(' ');
}

/**
 * "slice()"는 배열, 문자열 모두 사용
 * "substring()"은 문자열에만 사용
 */

/**
 * "toUpperCase()", "toLowerCase()"는 대상 문자(열)이 알파벳일 경우에만 대문자, 소문자로 바꾼다.
 * 알파벳이 아닐 경우에는 아무런 변화없이 그대로 유지된다. 이것은 사용자 입장에서 너무 편리한 부분이다.
 * 왜냐하면 "undefined"가 발생되지 않으므로 코딩하기가 편하다.
 */

/*** Linear Search === Sequential Search ***/
// function letterCapitalize(str) {
//   if (str.length === 0) {
//     return '';
//   }
//   let capitalizedStr = '';
//   for (let i = 0; i < str.length; i++) {
//     if ((i === 0) || (str[i-1] === ' ' && str[i] !== ' ')) {
//       capitalizedStr += str[i].toUpperCase();
//     } else {
//       capitalizedStr += str[i];
//     }
//   }
//   return capitalizedStr;
// }
