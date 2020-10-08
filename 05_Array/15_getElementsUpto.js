// 배열과 인덱스를 입력받아 주어진 인덱스 이전의 요소들을 갖는 새로운 배열을 리턴해야 합니다.

function getElementsUpTo(arr, n) {
  if (n > arr.length) {
    return [];
  }
  return arr.slice(0, n);
}
