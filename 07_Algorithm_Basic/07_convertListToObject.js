// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴해야 합니다.
// arr[i]의 첫 번째 요소를 키, 두 번째 요소를 값으로 하는 객체를 리턴해야 합니다.
// 중복되는 키의 경우, 초기의 값을 사용합니다.

function convertListToObject(arr) {
  return arr.reduce(function(acc, val) {
    if (val.length !== 0 && !(val[0] in acc)) {
      acc[val[0]] = val[1];
    }
    return acc;
  }, {});
}

// function convertListToObject(arr) {
//   let convertedObj = {};
//   arr.forEach(function(ele) {
//     if (ele.length !== 0 && !(ele[0] in result)) {
//       convertedObj[ele[0]] = ele[1];
//     }
//   });
//   return convertedObj;
// }

// function convertListToObject(arr) {
//   if (arr.length === 0) {
//     return {};
//   }
//   let convertedObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let innerArr = arr[i];
//     if (innerArr.length !== 0 && !(innerArr[0] in convertedObj)) {
//       convertedObj[innerArr[0]] = innerArr[1];
//     }
//   }
//   return convertedObj;
// }

// function convertListToObject(arr) {
//   if (arr.length === 0) {
//     return {};
//   }
//   let convertedObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length !== 0 && !(arr[i][0] in convertedObj)) {
//       convertedObj[arr[i][0]] = arr[i][1];
//     }
//   }
//   return convertedObj;
// }
