function makePermutations(str) {
  let stringPermutation = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i === 0 && j === 0) {
        stringPermutation = stringPermutation + str[i] + str[j];
      } else {
        stringPermutation = stringPermutation + ',' + str[i] + str[j];
      }
    }
  }
  return stringPermutation;
}
