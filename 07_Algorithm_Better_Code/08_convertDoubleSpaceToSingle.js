function convertDoubleSpaceToSingle(str) {
  let convertedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i-1] === ' ' && str[i] === ' ') {
      convertedStr += '';
    } else {
      convertedStr += str[i];
    }
  }
  return convertedStr;
}
