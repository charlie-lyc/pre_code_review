// 수를 입력받아 3 그리고 5로 각각 나눈 뒤 나머지 값에 따라 알맞은 메시지를 리턴해야 합니다.

function fizzBuzz(num) {
  let divide3 = num % 3;
  let divide5 = num % 5;
  if (divide3 === 0 && divide5 === 0) {
    return 'FizzBuzz';
  } else if (divide3 === 0) {
    return 'Fizz';
  } else if (divide5 === 0) {
    return 'Buzz';
  } else if (divide3 !== 0 || divide5 !== 0) {
    return 'No FizzBuzz';
  }
}

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
