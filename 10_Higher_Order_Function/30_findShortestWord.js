// 배열을 입력받아 배열에서 가장 짧은 길이를 가진 문자열 요소를 리턴해야 합니다.
function findShortestWord(arr) {
  if (arr.length === 0) {
    return '';
  }

  let newArr = arr.filter(function(ar) {
    return typeof ar === 'string';
  });
  if (newArr.length === 0) {
    return '';
  }
  
  return newArr.reduce(function(acc, val) {
    if (acc.length > val.length) {
      return val;
    }
    return acc;
  });
}

/* Use "reduce()", "map()", "filter()", "forEach()" !!! */
// function findShortestWord(arr) {
//   if (arr.length === 0) {
//     return '';
//   }
//
//   let longtestStr = arr.reduce(function(acc, val) {
//     if (typeof val === 'string' && acc.length < val.length) {
//       return val;
//     }
//     return acc;
//   }, '');

//   let maybeShortest = longtestStr;
//   arr.forEach(function(ar) {
//     if (typeof ar === 'string' && ar.length < maybeShortest.length) {
//       maybeShortest = ar;
//     }
//   });
//   return maybeShortest;
// }
