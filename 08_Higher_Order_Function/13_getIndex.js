// 정수를 요소로 갖는 배열과 정수(num)를 입력받아 num을 배열에 추가하고 정렬한다고 가정할 경우, num의 인덱스를 리턴해야 합니다.
function getIndex(arr, num) {
  if (arr.length === 0) {
    return 0;
  }
  let count = 0;
  arr.forEach(function(ar) {
    if (num > ar) {
      count++;
    }
  });
  return count; 
}