// 숫자 문자열을 입력받아 문자열을 구성하는 각 숫자 중 가장 큰 수를 나타내는 숫자를 리턴해야 합니다.

function getMaxNumberFromString(str) {
  let maxNumber = 0;
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) > maxNumber) {
      maxNumber = Number(str[i]);
    }
  }
  return String(maxNumber);
}
