// 두 개의 숫자 문자열을 입력받아 더 큰 수를 나타내는 문자열을 구하고, 해당 문자열이 나타내는 수에 5를 더한 수를 나타내는 숫자 문자열을 리턴해야 합니다.

function compareNumberStrings(numStr1, numStr2) {
  let largerNum = Math.max(Number(numStr1), Number(numStr2));
  return String(largerNum + 5);
}

// function compareNumberStrings(numStr1, numStr2) {
//   if (Number(numStr1) >= Number(numStr2)) {
//     return String(Number(numStr1)+5);
//   }
//   return String(Number(numStr2)+5);
// }
