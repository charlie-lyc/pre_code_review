// 문자열을 입력받아 문자열 내에 아래 중 하나가 존재하는지 여부를 리턴해야 합니다.
// 'a'로 시작해서 'b'로 끝나는 길이 5의 문자열
// 'b'로 시작해서 'a'로 끝나는 길이 5의 문자열
// 대소문자를 구분하지 않습니다.
// 공백도 한 글자로 취급합니다.
// 'a'와 'b'는 중복해서 등장할 수 있습니다.

function ABCheck(str) {
  for (let i = 0; i < str.length - 5; i ++) {
    let cutStr = str.substring(i, i + 5);
    if ((cutStr[0].toLowerCase() === 'a' && cutStr[4].toLowerCase() === 'b') || (cutStr[0].toLowerCase() === 'b' && cutStr[4].toLowerCase() === 'a')) {
      return true;
    }
  }
  return false;
}

// function ABCheck(str) {
//   for (let i = 0; i < str.length - 4; i++) {
//     if ((str[i].toLowerCase() === 'a' && str[i+4].toLowerCase() === 'b') || (str[i].toLowerCase() === 'b' && str[i+4].toLowerCase() === 'a')) {
//       return true;
//     }
//   }
//   return false;
// }
