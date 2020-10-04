// 이름과 나이를 입력받아 나이별로 다른 메시지를 리턴해야 합니다

function checkAge(name, age) {
  if (age >= 21) {
    return `Welcome, ${name}!`;
  }
  return `Go home, ${name}!`;
}

// function checkAge(name, age) {
//   let checkMsg;
//   if (age >= 21) {
//     checkMsg = 'Welcome, ';
//   } else {
//     checkMsg = 'Go home, ';
//   }
//   return checkMsg + name + '!';
// }
