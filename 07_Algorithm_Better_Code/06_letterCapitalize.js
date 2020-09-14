function letterCapitalize(str) {
  if (str.length === 0) {
    return '';
  }
  let capitalizedStr = '';
  for (let i = 0; i < str.length; i++) {
    if ((i === 0) || (str[i-1] === ' ' && str[i] !== ' ')) {
      capitalizedStr += str[i].toUpperCase();
    } else {
      capitalizedStr += str[i];
    }
  }
  return capitalizedStr;
}
