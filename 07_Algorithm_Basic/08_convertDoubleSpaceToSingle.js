// 문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴해야 합니다.
// 두 칸 이상의 공백은 존재하지 않는다고 가정합니다.

/*** "replace()" with "Regular Expression" ***/
function convertDoubleSpaceToSingle(str) {
  return str.replace(/\s+/g, ' ');
}

/**
 * "str.replace()" : String에서 특정 문자를 지우거나 다른 문자로 바꾸는 메소드
 * => 다만 "Regular Expression"에 대해 어느정도 알고 있어야 원활하게 사용 할 수 있다.
 *
 * "arr.splice()" : Array에서 특정 인덱스의 요소를 지우거나 끼워 넣는 메소드
 * => 잘 활용하면 배열 데이터를 처리하는데 유용하다.
 */

/*** Linear Search === Sequential Search ***/
// function convertDoubleSpaceToSingle(str) {
//   let convertedStr = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i-1] === ' ' && str[i] === ' ') {
//       convertedStr += '';
//     } else {
//       convertedStr += str[i];
//     }
//   }
//   return convertedStr;
// }

////////////////////////////////////////////////////////////////////////////////

// function convertDoubleSpaceToSingle(str) {
//   let splitStrArr = str.split(' ');
//   let filterStrArr = splitStrArr.filter(function(ele) {
//     return ele !== '';
//   });
//   return filterStrArr.join(' ');
// }
