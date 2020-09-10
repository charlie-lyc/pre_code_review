function addToFrontOfNew(arr, el) {
  let result = [el];
  return result.concat(arr);
}

// function addToFrontOfNew(arr, el) {
//   /* arr를 단순히 result에 할당하는 것은 일종의 원본 공유개념(포인터, 레퍼런스)이므로
//     문제의 조건인 "새로운배열"을 반환하기 위해 'slice()'를 사용하여 우회적으로 주소값이 다른
//     복사본을 만들어 내었다. */
//   let result = arr.slice(0)
//   result.unshift(el);
//   return result;
// }
