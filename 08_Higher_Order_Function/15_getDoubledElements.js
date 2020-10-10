// 수를 요소로 갖는 배열을 입력받아 각 요소를 2배 곱한 새로운 배열을 리턴해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 반드시 arr.map를 이용해서 풀어야 합니다.

function getDoubledElements(arr) {
  return arr.map(function(ele) {
    return ele * 2;
  });
}
