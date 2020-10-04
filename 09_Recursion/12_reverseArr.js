// 배열을 입력받아 순서가 뒤집힌 배열을 리턴해야 합니다.

function reverseArr(arr) {
  if (arr.length === 0) {
    return [];
  }
  return [arr[arr.length-1]].concat(reverseArr(arr.slice(0, arr.length-1)));
}
