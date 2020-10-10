// 함수와 배열을 입력받아 배열의 각 요소에 함수가 적용된 새로운 배열을 리턴해야 합니다.
// arr.map 사용은 금지됩니다.
// 반복문(for)문을 사용해야 합니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

function mapCallback(func, arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}
