// function isEitherEvenAndLessThan9(num1, num2) {
//   if (num1 % 2 === 0 || num2 % 2 === 0) {
//     if (9 > num1 && num2 < 9) {
//       return true;
//     }
//   }
//   return false;
// }

function isEitherEvenAndLessThan9(num1, num2) {
  if ((num1 % 2 === 0 || num2 % 2 === 0) && (9 > num1 && num2 < 9)) {
    return true;
  }
  return false;
}