function replaceAll(str, from, to) {
  let arrayOfStr = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (arrayOfStr[i] === from) {
      arrayOfStr[i] = to;
    }
  }
  return arrayOfStr.join('');
}
