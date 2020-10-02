/** 두 개 수를 입력받아 아래의 2가지 조건을 모두 만족하는지 검사합니다.
 * EitherEven: 적어도 하나의 수는 짝수이다.
 * LessThan9: 두 수 모두 9보다 작다.
 */
 
function isEitherEvenAndLessThan9(num1, num2) {
  if ((num1 % 2 === 0 || num2 % 2 === 0) && (9 > num1 && num2 < 9)) {
    return true;
  }
  return false;
}

// function isEitherEvenAndLessThan9(num1, num2) {
//   if (num1 % 2 === 0 || num2 % 2 === 0) {
//     if (9 > num1 && num2 < 9) {
//       return true;
//     }
//   }
//   return false;
// }
