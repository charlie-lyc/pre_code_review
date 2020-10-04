// 밑(base)과 지수(exponent)를 입력받아 밑의 거듭제곱을 리턴해야 합니다.

function computePower(base, exponent) {
  let result = 1;
  for (let i = 1; i < exponent+1; i++) {
    result *= base;
  }
  return result;
}
