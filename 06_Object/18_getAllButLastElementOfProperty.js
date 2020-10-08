// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소가 제거된 새로운 배열을 리턴해야 합니다.

function getAllButLastElementOfProperty(obj, key) {
  if (key in obj && Array.isArray(obj[key])) {
    return obj[key].slice(0, obj[key].length - 1);
  }
  return [];
}

// function getAllButLastElementOfProperty(obj, key) {
//   let maybeArr = obj[key];
//   if (key in obj && Array.isArray(maybeArr)) {
//     return maybeArr.slice(0, maybeArr.length - 1);
//   }
//   return [];
// }
