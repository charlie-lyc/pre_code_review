// 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴해야 합니다.
// 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
// 숫자(digit)는 연속해서 등장하지 않습니다.

function numberSearch(str) {
  if (str.length === 0) {
    return 0;
  }
  let sumOfNum = 0;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      sumOfNum += Number(str[i]);
    } else if (str[i] !== ' ') {
      newStr += str[i];
    }
  }
  return Math.round(sumOfNum/newStr.length);
}

/**
 * 정수인지 확인하는 메소드 : Number 객체
 * "Number.isInteger()"
***/

/**
 * 숫자가 아닌지 확인하는 메소드 : 전역 객체
 * "isNaN()"
 **/

/**
 * 데이터 타입이 'number'인지 확인하는 키워드 :
 * "typeof x === 'number'"
 **/

 // function numberSearch(str) {
 //   if (str.length === 0) {
 //     return 0;
 //   }
 //   // 문자열에서 공백만 찾기
 //   let onlySpace = str.split('').filter(function(ele) {
 //     return ele === ' ';
 //   });
 //   // 문자열에서 숫자만 찾기
 //   let onlyNum = str.split('').filter(function(ele) {
 //     return ele !== ' ' && !(isNaN(Number(ele)));
 //   });
 //   // 숫자들의 합 구하기
 //   let sumOfArr = onlyNum.reduce(function(acc, val) {
 //     return acc + Number(val);
 //   }, 0);
 //   // 문자열에서 공백과 숫자를 제외한 나머지 문자열을 길이로 숫자들의 합을 나누고, 반올림한 수 반환
 //   return Math.round(sumOfArr/(str.length - onlySpace.length - onlyNum.length));
 // }
