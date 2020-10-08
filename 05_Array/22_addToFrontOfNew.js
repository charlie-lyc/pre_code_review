// 배열과 요소를 입력받아 맨앞에 새로운 요소가 추가된 새로운 배열을 리턴해야 합니다.
// 새로운 배열(주소값 다름)을 리턴해야 합니다.
// 입력받은 배열을 수정하지 않아야 합니다(immutability).

function addToFrontOfNew(arr, el) {
  return [el].concat(arr);
}

// function addToFrontOfNew(arr, el) {
//   let result = [el];
//   return result.concat(arr);
// }

// function addToFrontOfNew(arr, el) {
//   let result = arr.slice();
//   result.unshift(el);
//   return result;
// }

/**
 * 문제의 조건인 "새로운배열"을 반환하기 위해 'slice()'를 사용하여
 * 주소값이 다른 복사본을 만들어 내었다.
 */

 /**              <요소 제거>            <요소 추가>
  * mutable   : shift(), pop()     unshift(), push()
  * immutable : slice()            concat()
  */
