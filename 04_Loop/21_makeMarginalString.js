// 문자열을 입력받아 해당 문자열을 처음부터 한 글자(letter)씩 다시 작성하려고 합니다. 이 때, 한 글자를 추가할 때마다 부분적으로 완성된 문자열을 전부 이어붙인 문자열을 리턴해야 합니다.

function makeMarginalString(str) {
  let result = '';
  for (let i = 1; i < str.length+1; i++) {
    for (let j = 0; j < i; j++) {
      result = result.concat(str[j]);
    }
  }
  return result;
}

// function makeMarginalString(str) {
//   let result = '';
//   for (let i = 1; i < str.length + 1; i ++) {
//     let res = '';
//     for (let j = 0; j < i; j ++) {
//       res = res.concat(str[j]);
//     }
//     result = result.concat(res);
//   }
//   return result;
// }
