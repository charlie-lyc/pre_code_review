// 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 이름 전체를 요소로 갖는 배열을 리턴해야 합니다.
function getFullNames(arr) {
  if (arr.length === 0) {
    return [];
  }
  let newArr = [];
  arr.forEach(function(ar) {
    newArr.push(ar.firstName + ' ' + ar.lastName);
  });
  return newArr;
}