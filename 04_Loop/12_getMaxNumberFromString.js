function getMaxNumberFromString(str) {
  let maxNumber = 0;
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) > maxNumber) {
      maxNumber = Number(str[i]);
    }
  }
  return String(maxNumber);
}
