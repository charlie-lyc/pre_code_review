function compareNumberStrings(numStr1, numStr2) {
  if (Number(numStr1) >= Number(numStr2)) {
    return String(Number(numStr1)+5);
  } else {
    return String(Number(numStr2)+5);
  }
}
