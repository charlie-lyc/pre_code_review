function firstCharacter(str) {
  if (str.length === 0) {
    return '';
  }
  let strFirstChars = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i-1] === ' ') {
      strFirstChars += str[i];
    }
  }
  return strFirstChars;
}

/*** Linear Search === Sequential Search ***/
