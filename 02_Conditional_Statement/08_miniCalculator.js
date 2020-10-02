// 두 개의 수와 기호를 입력받아 알맞게 계산한 값을 리턴해야 합니다.

function miniCalculator(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-' ) {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  }
}
