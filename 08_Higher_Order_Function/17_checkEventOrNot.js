// 수를 요소로 갖는 배열을 입력받아 각 요소가 2의 배수인지에 대한 정보를 요소로 갖는 새로운 배열을 리턴해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 반드시 arr.map를 이용해서 풀어야 합니다.
// 0은 2의 배수가 아니라고 가정합니다.

function checkEvenOrNot(arr) {
  return arr.map(function(ele) {
    if (ele !== 0 && ele % 2 === 0) {
      return 'ok';
    }
    return 'no';
  });
}
