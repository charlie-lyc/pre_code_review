// 문자열을 입력받아 해당 문자열에 등장하는 각 문자(letter)를 가지고 만들 수 있는 길이 2의 문자열들을 리턴해야 합니다.

function makePermutations(str) {
  let stringPermutation = '';
  for (let i = 0; i < str.length; i ++) {
    for (let j = 0; j < str.length; j ++) {
      if (i === 0 && j === 0) {
        stringPermutation = stringPermutation.concat(str[i] + str[j]);
      } else {
        stringPermutation = stringPermutation.concat(',' + str[i] + str[j]);
      }
    }
  }
  return stringPermutation;
}

// function makePermutations(str) {
//   let stringPermutation = '';
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (i === 0 && j === 0) {
//         stringPermutation += str[i] + str[j];
//       } else {
//         stringPermutation += ',' + str[i] + str[j];
//       }
//     }
//   }
//   return stringPermutation;
// }
