// 두 개의 함수를 입력받아 두 함수가 결합된 새로운 함수를 리턴해야 합니다.
// 리턴되는 함수는 정수를 입력받아 func2, func1의 순으로 적용합니다.

function compose2(func1, func2) {
  return function(number) {
    return func1(func2(number));
  }
}
