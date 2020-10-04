// 수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴해야 합니다.

function take(num, arr) {
  if (arr.length === 0 || num === 0) {
    return [];
  } else if (num > arr.length){
    num = arr.length;
  }
  return take(num-1, arr).concat(arr[num-1]);
}
