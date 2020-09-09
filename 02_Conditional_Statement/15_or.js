/*** or 연산자를 사용하지 않고 아래의 함수를 다시 선언 ***/
// function or(expression1, expression2) {
//   if (expression1 || expression2) {
//     return true;
//   }
//   return false;
// }

function or(expression1, expression2) {
  if (!expression1 && !expression2) {
    return false;
  }
  return true;
}
