function firstReverse(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i > -1; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
