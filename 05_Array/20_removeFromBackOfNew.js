// 배열을 입력받아 배열의 마지막 요소가 제외된 새로운 배열을 리턴해야 합니다.
// 새로운 배열(주소값 다름)을 리턴해야 합니다.
// 입력받은 배열을 수정하지 않아야 합니다(immutability).

function removeFromBackOfNew(arr) {
  return arr.slice(0, arr.length - 1);
}
