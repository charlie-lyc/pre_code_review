function decryptCaesarCipher(str, secret) {
  if (str.length === 0) {
    return '';
  }
  let plainStr = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if ((str[i] !== ' ') && (charCode - secret >= 97)) {
      plainStr += String.fromCharCode(charCode - secret);
    } else if ((str[i] !== ' ') && (charCode - secret < 97)) {
      plainStr += String.fromCharCode(charCode - secret + 26);
    } else {
      plainStr += str[i];
    }
  }
  return plainStr;
}

/*** from ASCII Code to Charater : String 객체의 기능을 통해 ascii-code(s)를 문자열로 변환
      String.fromCharCode(<ascii-code(s)>, ...)
***/
/*** from Charater to ASCII Code : string 메소드를 통해 문자열의 인덱스를 입력하면 해당 문자의 ascii-code를 반환
      str.charCodeAt(<index>)
***/

/* ASCII Code
  A ~ Z : 65 ~ 90
  a ~ z : 97 ~ 122
*/

// function decryptCaesarCipher(str, secret) {
//   if (str.length === 0) {
//     return '';
//   }
//   let plainStr = '';
//   for (let i = 0; i < str.length; i++) {
//     if ((str[i] !== ' ') && (str.charCodeAt(i) - secret >= 97)) {
//       plainStr += String.fromCharCode(str.charCodeAt(i) - secret);
//     } else if ((str[i] !== ' ') && (str.charCodeAt(i) - secret < 97)) {
//       plainStr += String.fromCharCode(str.charCodeAt(i) - secret - 97 + 122 + 1);
//     } else {
//       plainStr += str[i];
//     }
//   }
//   return plainStr;
// }
