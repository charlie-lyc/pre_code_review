// 0-9 사이의 정수를 요소로 갖는 배열을 입력받아 전화번호 형식의 문자열을 리턴해야 합니다.

function createPhoneNumber(arr) {
  if (arr.length === 8) {
    return '(010)' + arr.slice(0, 4).join('') + '-' + arr.slice(4).join('');
  }
  return '(' + arr.slice(0, 3).join('') + ')' + arr.slice(3, 7).join('') + '-' + arr.slice(7).join('');
}

// function createPhoneNumber(arr) {
//   let phoneNumber = '';
//   if (arr.length === 0) {
//     return 0;
//   } else if (arr.length === 8) {
//     phoneNumber += '(010)' + arr.slice(0, 4).join('') + '-' + arr.slice(4).join('');
//   } else {
//     phoneNumber += '(' + arr.slice(0, 3).join('') + ')' + arr.slice(3, 7).join('') + '-' + arr.slice(7).join('');
//   }
//   return phoneNumber;
// }
