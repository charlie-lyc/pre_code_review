// 수(num)와 배열을 입력받아 차례대로 num개의 요소가 제거된 새로운 배열을 리턴해야 합니다.

function drop(num, arr) {
  if (arr.length === 0) {
    return [];
  }
  if (num === 0) {
    return arr;
  } else if (num > arr.length) {
    num = arr.length;
  }
  return drop(num - 1, arr.slice(1));
}
