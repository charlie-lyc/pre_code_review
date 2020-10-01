// 수를 요소로 갖는 배열을 입력받아 각 요소가 2의 배수인지에 대한 정보를 요소로 갖는 새로운 배열을 리턴해야 합니다.
function checkEvenOrNot(arr) {
  if (arr.length === 0) {
    return [];
  }
  let newArr = [];
  arr.forEach(function(ar) {
    if (ar !== 0 && ar % 2 === 0) {
      newArr.push('ok');
    } else {
      newArr.push('no');
    }
  });
  return newArr;
}