// 수를 입력받아 각 자리의 수를 곱한 결과물들이 한자리 수가 될 때까지 반복적으로 곱한 후, 최후의 한 자리 수를 리턴해야 합니다.
// number 타입의 정수 (0 <= num && num <= Number.MAX_SAFE_INTEGER)
// number 타입의 자연수 n (n < 10)

function test3(num) {
  const splitArr = String(num).split('');
  const digitsArr = splitArr.map(function(str) {
    return Number(str);
  });

  const digitsMulti = digitsArr.reduce(function(acc, digit) {
    return acc * digit;
  });
  if (digitsMulti % 10 === digitsMulti) {
    return digitsMulti;
  }

  return test3(digitsMulti);
}
