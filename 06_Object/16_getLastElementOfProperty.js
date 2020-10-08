// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소를 리턴해야 합니다.

function getLastElementOfProperty(obj, property) {
  if (Array.isArray(obj[property])) {
    return obj[property][obj[property].length - 1];
  }
}

/**
 * 배열을 인덱스로 조회할때 인덱스의 범위가 아닌 정수가 입력될 경우
 * "undefined"가 출력되도록 이미 옵션이 내장되어 있다.
 */

// function getLastElementOfProperty(obj, property) {
//   let maybeArr = obj[property];
//   if (Array.isArray(maybeArr)) {
//     return maybeArr[maybeArr.length-1];
//   }
//   return undefined;
// }
