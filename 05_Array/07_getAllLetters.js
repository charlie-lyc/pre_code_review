// 문자열을 입력받아 문자열을 구성하는 각 문자를 요소로 갖는 배열을 리턴해야 합니다.

function getAllLetters(str) {
  let allLetters = [];
  for (let i = 0; i < str.length; i++) {
    allLetters.push(str[i]);
  }
  return allLetters;
}

/**
 * '문자열'은 말그대로 "문자"들로 이루어진 "배열"이다.
 * 따라서 배열처럼 index를 이용해 각 문자에 대한 조회가 가능하다.
 * 그러나 다른 문자로 바꾸는 것은 불가능하다.(immutable)
 */
