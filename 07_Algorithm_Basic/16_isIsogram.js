// 문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다.
// 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.
// 빈 문자열을 입력받은 경우, true를 리턴해야 합니다.
// 대소문자는 구별하지 않습니다.

function isIsogram(str) {
  let maybeIsoObj = {};
  for (let i = 0; i < str.length; i++) {
    if (!(str[i].toLowerCase() in maybeIsoObj)) {
      maybeIsoObj[str[i].toLowerCase()] = 1;
    } else if (str[i].toLowerCase() in maybeIsoObj) {
      return false;
    }
  }
  return true;
}

// function isIsogram(str) {
//   let countLetter = str.toLowerCase().split('').reduce(function(acc, val) {
//     if (!(val in acc)) {
//       acc[val] = 1;
//     } else {
//       acc[val] ++;
//     }
//     return acc;
//   }, {});
//   for (let key in countLetter) {
//     if (countLetter[key] > 1) {
//       return false;
//     }
//   }
//   return true;
// }
