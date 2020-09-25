// 배열과 임의의 값(keeper)을 입력받아 기존 배열에서 keeper와 일치하는 요소만을 갖는 새로운 배열을 리턴해야 합니다.
function keep(arr, keeper) {
  if (arr.length === 0) {
    return [];
  }
  let newArr = [];
  arr.forEach(function(ar) {
    if (ar === keeper) {
      newArr.push(ar);
    }
  });
  return newArr;
}
