// 문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴해야 합니다.
// 두 칸 이상의 공백은 존재하지 않는다고 가정합니다.

/*** "replace()" with "Regular Expression" ***/
function convertDoubleSpaceToSingle(str) {
  return str.replace(/\s+/g, ' ');
}

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
