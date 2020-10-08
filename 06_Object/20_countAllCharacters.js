// 문자열을 입력받아 문자열을 구성하는 각 문자(letter)를 키로 갖는 객체를 리턴해야 합니다.
// 각 키의 값은 해당 문자가 문자열에서 등장하는 횟수를 의미하는 number 타입의 값이어야 합니다.

function countAllCharacters(str) {
  return str.split('').reduce(function(acc, val) {
    if (!(val in acc)) {
      acc[val] = 1;
    } else {
      acc[val] ++;
    }
    return acc;
  }, {});
}

// function countAllCharacters(str) {
//   let countOfChars = {};
//   for (let i = 0; i < str.length; i ++) {
//     if (!(str[i] in countOfChars)) {
//       countOfChars[str[i]] = 1;
//     } else {
//       countOfChars[str[i]] ++;
//     }
//   }
//   return countOfChars;
// }
