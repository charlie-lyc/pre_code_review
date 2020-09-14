function insertDash(str) {
  let insertedDash = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i-1] % 2 === 1 && str[i] % 2 === 1) {
      insertedDash += '-' + str[i];
    } else {
      insertedDash += str[i];
    }
  }
  return insertedDash;
}
