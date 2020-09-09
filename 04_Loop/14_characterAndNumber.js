function characterAndNumber(word) {
  let arrayOfWord = word.split('');
  let madeString = '';
  for (let i = 0; i < word.length; i++) {
    madeString = madeString + word[i] + String(i);
  }
  return madeString;
}
