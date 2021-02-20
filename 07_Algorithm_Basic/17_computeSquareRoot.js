// 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.
// 최대 소수점 둘째 짜리까지 구합니다. (소수점 셋째 자리에서 반올림)
// Math.sqrt 사용은 금지됩니다.

function computeSquareRoot(num) {
  let squareRoot = num ** (1/2);
  return Number(squareRoot.toFixed(2));
}

// function computeSquareRoot(num) {
//   let squareRoot = num ** (1/2);
//   return Math.round(squareRoot*100)/100;
// }

/***
 * 소수점 반올림 표현하는 방법
 *  1. "Math.round()" : 소수 첫째자리에서 반올림하여 "정수" 형태로 반환
 *  2. "num.toFixed()" : 얻고 싶은 소수자리를 옵션으로 입력하면,
 *     반올림이 적용되어 해당부분까지 잘라서 "문자열" 형태로 반환
 **/
