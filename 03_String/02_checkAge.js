function checkAge(name, age) {
  let checkMsg;
  if (age >= 21) {
    checkMsg = 'Welcome, ';
  } else {
    checkMsg = 'Go home, ';
  }
  return checkMsg + name + '!';
}
