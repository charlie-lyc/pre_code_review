// 두 개의 함수와 수(num)를 입력받아 num에 함수들을 num에 가까운 순서대로 적용한 결과를 리턴해야 합니다.
// 마지막으로 호출되는 함수(func1)의 리턴 타입을 따릅니다.

function compose(func1, func2, num) {
  return func1(func2(num));
}
