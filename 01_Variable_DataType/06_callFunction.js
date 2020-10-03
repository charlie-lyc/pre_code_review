// 변수에 함수가 담겨있다면, 다른 변수와는 다르게 () 괄호를 붙여서 함수를 실행할 수 있습니다. 또한 입력값을 설정할 수도 있는데요, 이를 전달인자(argument), 줄여서 인자라고 부릅니다.

let word;
function returnWordWithJoy(word) {
  if (typeof word !== 'string') {
    return 'wrong type';
  } else {
    return word + '!';
  }
}

/* Call (or Invocation) Function */
word = returnWordWithJoy('I love coding');
