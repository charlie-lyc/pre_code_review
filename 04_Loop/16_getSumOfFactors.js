// 수를 입력받아 약수(factor)의 합을 리턴해야 합니다.

function getSumOfFactors(num) {
  let sumOfFactors = 0;
  for (let i = 1; i < num + 1; i++) {
    if (num % i === 0) {
      sumOfFactors += i;
    }
  }
  return sumOfFactors;
}
