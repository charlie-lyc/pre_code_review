function isIsogram(str) {
  let maybeIsoObj = {};
  for (let i = 0; i < str.length; i++) {
    if (!(str[i].toLowerCase() in maybeIsoObj)) {
      maybeIsoObj[str[i].toLowerCase()] = 1;
    } else if (str[i].toLowerCase() in maybeIsoObj) {
      return false;
    }
  }
  return true;
}
