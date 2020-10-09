// 배열과 객체를 입력받아 배열의 각 요소들을 객체의 키로 했을 때 그 값을 추출하여 만든 새로운 객체를 리턴해야 합니다.

function select(arr, obj) {
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      newObj[arr[i]] = obj[arr[i]];
    }
  }
  return newObj;
}

/**
 * "key in obj" => true or false
 * "index of arr" => true of false
 */

// function select(arr, obj) {
//   let newObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       newObj[arr[i]] = obj[arr[i]];
//     }
//   }
//   return newObj;
// }
