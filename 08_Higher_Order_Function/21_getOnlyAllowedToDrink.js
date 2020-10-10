// 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 18세 이상인 사람의 이름을 요소로 갖는 배열을 리턴해야 합니다.
// arr[i]는 'name', 'age' 속성을 갖는 객체
// 반복문(for, while) 사용은 금지됩니다.

function getOnlyAllowedToDrink(arr) {
  let filterArr = arr.filter(function(obj) {
    return obj.age >= 18;
  });
  return filterArr.map(function(obj) {
    return obj.name;
  });
}
