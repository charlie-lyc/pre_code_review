// 문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.

function insertDash(str) {
  return str.split('').reduce(function(acc, val) {
    if (Number(acc[acc.length -1]) % 2 === 1 && Number(val) % 2 === 1) {
      acc = acc.concat('-' + val);
    } else {
      acc = acc.concat(val);
    }
    return acc;
  }, '');
}

/*** Linear Search === Sequential Search ***/
// function insertDash(str) {
//   let insertedDash = '';
//   for (let i = 0; i < str.length; i++) {
//     if (Number(str[i-1]) % 2 === 1 && Number(str[i]) % 2 === 1) {
//       insertedDash += '-' + str[i];
//     } else {
//       insertedDash += str[i];
//     }
//   }
//   return insertedDash;
// }
