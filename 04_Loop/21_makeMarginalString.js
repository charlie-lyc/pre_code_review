function makeMarginalString(str) {
  let result = '';
  for (let i = 1; i < str.length+1; i++) {
    for (let j = 0; j < i; j++) {
      result = result + str[j];
    }
  }
  return result;
}
