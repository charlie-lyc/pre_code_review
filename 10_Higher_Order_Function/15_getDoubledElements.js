// 수를 요소로 갖는 배열을 입력받아 각 요소를 2배 곱한 새로운 배열을 리턴해야 합니다.
function getDoubledElements(arr) {
  if (arr.length === 0) {
    return [];
  }
  let newArr = [];
  arr.forEach(function(ar) {
    newArr.push(ar * 2);
  });
  return newArr;
}
