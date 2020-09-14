function convertListToObject(arr) {
  if (arr.length === 0) {
    return {};
  }
  let convertedObj = {};
  for (let i = 0; i < arr.length; i++) {
    let innerArr = arr[i];
    if (innerArr.length !== 0 && !(innerArr[0] in convertedObj)) {
      convertedObj[innerArr[0]] = innerArr[1];
    }
  }
  return convertedObj;
}

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
