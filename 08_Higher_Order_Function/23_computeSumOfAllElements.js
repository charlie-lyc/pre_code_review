// number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 합을 리턴해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 반드시 arr.reduce를 이용해서 풀어야 합니다.

function computeSumOfAllElements(arr) {
  return arr.reduce(function(acc, val) {
    return acc + val;
  }, 0);
}
