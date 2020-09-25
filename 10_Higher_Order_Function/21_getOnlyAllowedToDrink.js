// 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 18세 이상인 사람의 이름을 요소로 갖는 배열을 리턴해야 합니다.
function getOnlyAllowedToDrink(arr) {
  if (arr.length === 0) {
    return [];
  }
  let newArr = [];
  arr.forEach(function(ar) {
    if (ar.age >= 18) {
      newArr.push(ar.name);
    }
  });
  return newArr;
}