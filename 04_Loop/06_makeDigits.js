// 수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴해야 합니다.

function makeDigits(num) {
  let madeDigits = '';
  for (let i = 1; i < num+1; i++) {
    madeDigits += String(i);
  }
  return madeDigits;
}
