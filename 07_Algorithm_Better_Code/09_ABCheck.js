function ABCheck(str) {
  for (let i = 0; i < str.length - 4; i++) {
    if ((str[i].toLowerCase() === 'a' && str[i+4].toLowerCase() === 'b') || (str[i].toLowerCase() === 'b' && str[i+4].toLowerCase() === 'a')) {
      return true;
    }
  }
  return false;
}
