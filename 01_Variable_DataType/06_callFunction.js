let word;

function returnWordWithJoy(word) {
  if (typeof word !== 'string') {
    return 'wrong type';
  } else {
    return word + '!';
  }
}
// Call Function
word = returnWordWithJoy('I love coding');
