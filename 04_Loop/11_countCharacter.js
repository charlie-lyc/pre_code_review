// 문자열과 문자를 입력받아 문자열에서 문자(letter)가 등장하는 횟수를 리턴해야 합니다.

function countCharacter(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length ; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}
