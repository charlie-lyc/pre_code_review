// 배열을 입력받아 배열의 마지막 요소를 삭제한 배열을 리턴해야 합니다.
// 기존 배열에 첫번째 요소가 삭제된 배열(주소값 동일)을 리턴해야 합니다.

function removeFromBack(arr) {
  arr.pop();
  return arr;
}
