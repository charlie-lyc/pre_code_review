// 배열을 입력받아 배열의 첫번쨰 요소가 삭제된 배열을 리턴해야 합니다.
// 기존 배열에 첫번째 요소가 삭제된 배열(주소값 동일)을 리턴해야 합니다.

function removeFromFront(arr) {
  arr.shift();
  return arr;
}
