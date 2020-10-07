// 배열과 수를 입력받아 수가 인덱스로 가리키는 배열의 요소를 리턴해야 합니다.

function getNthElement(arr, index) {
  if (arr.length === 0) {
    return undefined;
  } else if (arr.length - 1 < index) {
    return 'out of index range';
  }
  return  arr[index];
}
