// 수를 입력받아 각 자릿수를 모두 더한 값을 리턴해야 합니다.
// number 타입의 정수 (num <= Number.MAX_SAFE_INTEGER)
// number 타입을 리턴해야 합니다.
// 음수를 입력받은 경우, 첫번째 수는 음수로 계산합니다.

function test2(num) {
  const splitArr = String(num).split('');
  if (splitArr[0] === '-') {
    splitArr.shift();
    splitArr[0] = '-' + splitArr[0];
  }

  const digitsArr = splitArr.map(function(str) {
    return Number(str);
  });

  return digitsArr.reduce(function(acc, digit) {
    return acc + digit;
  }, 0);
}
