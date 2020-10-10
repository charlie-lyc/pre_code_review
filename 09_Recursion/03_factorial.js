// 수 n을 입력받아 factorial(n!) 값을 리턴해야 합니다.
// 함수 factorial은 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// factorial(0)은 1로 정의됩니다.
// 음수 입력은 들어오지 않습니다.

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1)
}
