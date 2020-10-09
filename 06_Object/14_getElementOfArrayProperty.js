// 객체, 키, 수를 입력받아 주어진 키에 해당하는 값이 배열인 경우, 수가 가르키는 인덱스에 해당하는 요소를 리턴해야 합니다.

function getElementOfArrayProperty(obj, key, index) {
  let maybeArr = obj[key];
  if (Array.isArray(maybeArr)) {
    return maybeArr[index];
  }
}

// function getElementOfArrayProperty(obj, key, index) {
//   let maybeArr = obj[key];
//   for (let key in obj) {
//     if (Array.isArray(maybeArr)) {
//       return maybeArr[index];
//     }
//   }
// }

// function getElementOfArrayProperty(obj, key, index) {
//   for (let key in obj) {
//     if (Array.isArray(obj[key])) {
//       return obj[key][index];
//     }
//   }
// }
