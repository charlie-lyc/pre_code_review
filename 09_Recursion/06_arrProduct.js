// 배열을 입력받아 모든 요소의 곱을 리턴해야 합니다.

function arrProduct(arr) {
  if (arr.length === 0) {
    return 1;
  } else if (arr.indexOf(0) !== -1) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] * arrProduct(arr.slice(1));
}
