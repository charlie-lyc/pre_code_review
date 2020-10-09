// 문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 3개 이상 연속되는 문자만 압축합니다.

function compressString(str) {
  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i ++) {
    if (str[i] === str[i+1]) {
      count ++;
    } else {
      if (count >= 3) {
        result += String(count) + str[i];
        count = 1;
      } else if (count === 2) {
        result += str[i] + str[i];
        count = 1;
      } else {
        result += str[i];
      }
    }
  }
  return result;
}

/**
*  JavaScript : Loose Equality 적1
*  3 + 'a' => '3a' |  2 + '1' => '31'
*  3 - 'a' => NaN  |  2 - '1' => 1
*  3 * 'a' => NaN  |  2 * '1' => 2
*  3 / 'a' => NaN  |  2 / '2' => 1
*
*  Python :
*  3 + 'a' => TypeError: unsupported operand type(s) for +: 'int' and 'str'
*  3 - 'a' => TypeError
*  3 * 'a' => 'aaa'
*  3 / 'a' => TypeError
*/

/*** 이중 loop까지는 필요가 없다. ***/
// function compressString(str) {
//   let compressedStr = '';
//   // 문자열 전체를 순회하는 outer loop
//   for (let i = 0; i < str.length; i++) {
//     let count = 1;
//     // 문자열 내에서 문자의 반복 횟수를 구하기 위한 inner loop
//     for (let j = i; j < str.length - 1; j++) {
//       if (str[j] === str[j+1]) {
//         count++;
//         i++;
//       } else if (str[j] !== str[j+1]) {
//         break;
//       }
//     }
//     // 반복 횟수에 따른 문자 처리
//     if (count >= 3) {
//       compressedStr += String(count) + str[i];
//     } else if (count === 2) {
//       compressedStr += str[i] + str[i];
//     } else {
//       compressedStr += str[i];
//     }
//   }
//   return compressedStr;
// }
