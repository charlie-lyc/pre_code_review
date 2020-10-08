// 문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴해야 합니다.
// 띄어쓰기는 제외합니다.
// 가장 많이 반복되는 문자가 다수일 경우, 가장 먼저 해당 횟수에 도달한 문자를 리턴해야 합니다.

function mostFrequentCharacter(str) {
  /***************< 예외 처리 >****************/
  if (str.trim().length === 0) {
    return '';
  }
  /************< 나의 예외 처리 >***************/
  // if (str.length === 0) {
  //   return '';
  // }
  // let splitStr = str.split('');
  // let countOfSpace = 0;
  // splitStr.forEach(function(ele) {
  //   if (ele === ' ') {
  //     countOfSpace ++;
  //   }
  // });
  // if (countOfSpace === splitStr.length) {
  //   return '';
  // }
  /******************************************/
  // 문자 사이 공백 제거, 문자별 카운터 생성, 최대 숫자 찾기
  let arrOfLetters = str.split(' ').join('').split('');
  let countOfLetters = arrOfLetters.reduce(function(acc, val) {
    if (!(val in acc)) {
      acc[val] = 1;
    } else {
      acc[val] ++;
    }
    return acc;
  }, {});
  let arrOfCount = [];
  for (let key in countOfLetters) {
     arrOfCount.push(countOfLetters[key]);
  }
  let maxCount = Math.max.apply(null, arrOfCount);
  // 가장 빨리 최대 숫자에 도달하는 문자 찾기
  let count = {};
  for (let i = 0; i < arrOfLetters.length; i ++) {
    if (!(arrOfLetters[i] in count)) {
      count[arrOfLetters[i]] = 1;
    } else {
      count[arrOfLetters[i]] ++;
    }
    if (count[arrOfLetters[i]] === maxCount) {
      return arrOfLetters[i];
    }
  }
}

////////////////////////////////////////////////////////////////////////////////

// function mostFrequentCharacter(str) {
//   // 빈 문자열 입력시
//   if (str.length === 0) {
//     return '';
//   }
//   // 최대 빈도수 찾기
//   let maxNumber = 0;
//   let countOfChars = {};
//   for (let i = 0; i < str.length; i ++) {
//     if (str[i] !== ' ' && !(str[i] in countOfChars)) {
//       countOfChars[str[i]] = 1;
//     } else if (str[i] !== ' ' && str[i] in countOfChars){
//       countOfChars[str[i]] ++;
//     }
//     if (countOfChars[str[i]] > maxNumber) {
//       maxNumber = countOfChars[str[i]];
//     }
//   }
//   // 공백으로만 이루어진 문자열 입력시
//   if (maxNumber === 0) {
//     return '';
//   }
//   // 가장 빨리 최대 빈도수에 도달하는 문자 찾기
//   let countOfLetters = {};
//   for (let i = 0; i < str.length; i ++) {
//     if (str[i] !== ' ' && !(str[i] in countOfLetters)) {
//       countOfLetters[str[i]] = 1;
//     } else if (str[i] !== ' ' && str[i] in countOfLetters){
//       countOfLetters[str[i]] ++;
//     }
//     if (countOfLetters[str[i]] === maxNumber) {
//       return str[i];
//     }
//   }
// }
