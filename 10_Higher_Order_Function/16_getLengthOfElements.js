// 문자열을 요소로 갖는 배열을 입력받아 각 요소의 길이를 요소로 갖는 새로운 배열을 리턴해야 합니다.
function getLengthOfElements(arr) {
  if (arr.length === 0) {
    return [];
  }
  let newArr = [];
  arr.forEach(function(ar) {
    newArr.push(ar.length);
  });
  return newArr;
}