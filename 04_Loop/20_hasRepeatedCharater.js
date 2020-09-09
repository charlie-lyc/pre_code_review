function hasRepeatedCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count ++;
        if (count === 2) {
          return true;
        }
      }
    }
  }
  return false;
}
