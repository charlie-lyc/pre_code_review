// 수를 입력받아 n-factorial(n!) 값을 리턴해야 합니다.

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1)
}
