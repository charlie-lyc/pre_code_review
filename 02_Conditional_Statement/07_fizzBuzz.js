// function fizzBuzz(num) {
//   if (num % 3 === 0) {
//     if (num % 5 === 0) {
//       return 'FizzBuzz';
//     } else {
//       return 'Fizz';
//     }
//   } else {
//     if (num % 5 === 0) {
//       return 'Buzz';
//     } else {
//       return 'No FizzBuzz';
//     }
//   }
// }

function fizzBuzz(num) {
  // TODO: 여기에 코드를 작성합니다.
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 !== 0 && num % 5 !== 0) {
    return 'No FizzBuzz';
  } else if(num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0){
    return 'Buzz';
  }
}
