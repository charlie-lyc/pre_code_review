// number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 합을 리턴해야 합니다.
function computeSumOfAllElements(arr) {
  return arr.reduce(function(acc, val) {
    return acc + val;
  }, 0);
}
