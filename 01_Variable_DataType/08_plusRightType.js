// 우리는 string과 number에 대해서 막 배웠습니다. 아까 문제를 푸시면서 이상한 것을 발견하시지 않았나요? +의 작동이 내가 생각한 것과 다르다고 생각하셨다면, 잘 생각하신겁니다 :) string과 string을 더하면, 문자열과 문자열이 붙은 형태로 표현됩니다. number와 number를 더하면, 우리가 상상한대로 덧셈 연산이 진행됩니다.

let score0 = 90 + '10';
let score1 = 90 + 10;

// console.log(90 + '10'); // '9010'
// console.log(90 + 10); // 100
