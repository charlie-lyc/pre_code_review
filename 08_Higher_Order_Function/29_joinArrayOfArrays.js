// 두 개의 배열을 입력받아 배열들의 요소를 모두 담고 있는 단일 배열을 리턴해야 합니다.
function joinArrayOfArrays(arr) {
  return arr.reduce(function(acc, val) {
    return acc.concat(val);
  });
}
