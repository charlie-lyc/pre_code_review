// 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
// 카이사르 암호(Caesar cipher)는 평문(plaintext)을 암호키 secret개만큼 (오른쪽으로) 평행이동시켜 암호화 합니다. 복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말합니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 공백이나 기호는 그대로 두어야 합니다.

function decryptCaesarCipher(str, secret) {
  let decipherArr = str.split('').map(function(ele) {
    if (97 <= ele.charCodeAt() && ele.charCodeAt() <= 122) {
      if (ele.charCodeAt() - secret >= 97) {
        return String.fromCharCode(ele.charCodeAt() - secret);
      }
      return String.fromCharCode(ele.charCodeAt() - secret + 26);
    }
    return ele;
  });
  return decipherArr.join('');
}

/**
 * from ASCII Code to Charater : String 객체의 기능을 통해 ascii-code(s)를 문자열로 변환
 * "String.fromCharCode(<ascii-code(s)>, ...)""
 */

/**
 * from Charater to ASCII Code : string 메소드를 통해 문자열의 인덱스를 입력하면 해당 문자의 ascii-code를 반환
 * "str.charCodeAt(<index>)""
 */

/**
 * ASCII Code
 *  - a ~ z : 97 ~ 122
 *  - A ~ Z : 65 ~ 90
 */

// function decryptCaesarCipher(str, secret) {
//   if (str.length === 0) {
//     return '';
//   }
//   let plainStr = '';
//   for (let i = 0; i < str.length; i++) {
//     let charCode = str.charCodeAt(i);
//     if ((str[i] !== ' ') && (charCode - secret >= 97)) {
//       plainStr += String.fromCharCode(charCode - secret);
//     } else if ((str[i] !== ' ') && (charCode - secret < 97)) {
//       plainStr += String.fromCharCode(charCode - secret + 26);
//     } else {
//       plainStr += str[i];
//     }
//   }
//   return plainStr;
// }
