// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 배열의 각 요소를 제곱한 새로운 배열을 리턴해야 합니다.
function square(number) {
  return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
  let newArr = [];
  if (Array.isArray(obj[property])) {
    obj[property].forEach(function(ob) {
      newArr.push(square(ob));
    });
  }
  return newArr;
}