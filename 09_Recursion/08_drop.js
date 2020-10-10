// 수(num)와 배열을 입력받아 차례대로 num개의 요소가 제거된 새로운 배열을 리턴해야 합니다.
// 함수 drop은 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// num이 arr.length보다 클 경우 arr.length로 대신한다.

function drop(num, arr) {
  if (num === 0) {
    return arr;
  }
  if (arr.length === 0) {
    return [];
  } else if (num > arr.length) {
    num = arr.length;
  }
  return drop(num - 1, arr.slice(1));
}
