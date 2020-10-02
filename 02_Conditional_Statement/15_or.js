// 두 개의 boolean 값을 입력받아 or 연산을 적용한 것과 같은 결과를 리턴해야 합니다.

function or(expression1, expression2) {
  if (!expression1 && !expression2) {
    return false;
  }
  return true;
}

/*** or 연산자를 사용하지 않고 아래의 함수를 다시 선언 ***/
// function or(expression1, expression2) {
//   if (expression1 || expression2) {
//     return true;
//   }
//   return false;
// }
