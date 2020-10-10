// 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 이름 전체를 요소로 갖는 배열을 리턴해야 합니다.
// 이름 전체는 'firstName', 'lastName' 속성값 사이에 띄어쓰기 하나를 둔 문자열입니다.
// 반복문(for, while) 사용은 금지됩니다.

function getFullNames(arr) {
  return arr.map(function(obj) {
    return obj.firstName + ' ' + obj.lastName;
  });
}
