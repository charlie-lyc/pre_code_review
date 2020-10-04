// 두 개의 수를 입력받아 두 수를 포함해 두 수 사이의 수 중 2의 배수의 개수를 리턴해야 합니다.

function makeMultiplesOfDigit2(num1, num2) {
  let newNum1 = num1;
  let newNum2 = num2;
  if (num1 > num2) {
    newNum1 = num2;
    newNum2 = num1;
  }
  let count = 0;
  for (let i = newNum1; i < newNum2 + 1; i ++) {
    if (i !== 0 && i % 2 === 0) {
      count ++;
    }
  }
  return count;
}
