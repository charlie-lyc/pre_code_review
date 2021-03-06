// 객체를 요소로 갖는 배열과 id를 입력받아, 해당 id값을 가지고 있는 객체를 리턴해야 합니다.
// arr[i]는 'id', 'name', 'children' 등의 속성을 갖는 객체
// 'id'의 값은 number 타입이고, 배열이 요소인 객체가 'children' 속성을 가질 경우, 해당 값은 초기 입력(arr)과 같은 구조를 지닌 배열입니다.
// 입력으로 주어지는 배열은 재귀적 구조를 가지고 있습니다. (입출력 예시 참고)
// 중첩 구조의 깊이(depth)에는 제한이 없습니다.
// 함수 test7은 재귀 함수로 구현되어야 합니다.
// 입력받은 id를 가진 객체가 없을 경우, null을 리턴해야 합니다.

function test7(arr, id) {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i]['id'] === id) {
      return arr[i];
    } else if ('children' in arr[i]) {
      let result = test7(arr[i]['children'], id);
      if (result !== null) {
        return result;
      }
    }
  }
  return null;
}
