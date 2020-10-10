// 수(num)를 입력받아 피보나치 수열의 num번째 요소를 리턴해야 합니다.
// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
// 함수 fibonacci는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 피보나치 수열은 0번부터 시작합니다.

function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }
  return fibonacci(num-2) + fibonacci(num-1);
}
