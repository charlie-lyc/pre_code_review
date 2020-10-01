// 배열과 임의의 값(discarder)을 입력받아 기존 배열에서 discarder와 일치하는 요소가 제거된 새로운 배열을 리턴해야 합니다.
function removeElement(arr, discarder) {
  if (arr.length ===0) {
    return [];
  }
  let newArr = [];
  arr.forEach(function(ar) {
    if (ar !== discarder) {
      newArr.push(ar);
    }
  });
  return newArr;
}
