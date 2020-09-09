function getSumOfFactors(num) {
  let sumOfFactors = 0;
  for (let i = 1; i < num + 1; i++) {
    if (num % i === 0) {
      sumOfFactors = sumOfFactors + i;
    }
  }
  return sumOfFactors;
}
