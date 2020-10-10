// 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 각 객체의 'name' 속성을 요소로 갖는 배열을 리턴해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.

function getOnlyNames(arr) {
  return arr.map(function(obj) {
    return obj.name;
  });
}
