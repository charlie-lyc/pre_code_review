// 두 개의 수를 입력받아 조건별로 다른 메시지를 리턴해야 합니다

function compareNumbers(num1, num2) {
  if (num1 > num2) {
    return `${num1}은(는) ${num2}보다 큽니다`;
  } else if (num1 < num2) {
    return `${num1}은(는) ${num2}보다 작습니다`;
  }
  return '두 수는 같습니다';
}

// function compareNumbers(num1, num2) {
//   if (num1 > num2) {
//     return num1 +'은(는) '+ num2 +'보다 큽니다';
//   } else if (num1 < num2) {
//     return num1 +'은(는) '+ num2 +'보다 작습니다';
//   } else {
//     return '두 수는 같습니다';
//   }
// }
