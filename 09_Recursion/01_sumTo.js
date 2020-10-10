// 수(num)를 입력받아 1부터 num까지의 합을 리턴해야 합니다.
// 함수 sumTo는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// n * (n + 1) / 2 와 같은 공식의 사용은 금지됩니다.
// 음수 입력은 들어오지 않습니다.

function sumTo(num) {
  if (num === 0) {
    return 0;
  }
  return num + sumTo(num-1);
}
