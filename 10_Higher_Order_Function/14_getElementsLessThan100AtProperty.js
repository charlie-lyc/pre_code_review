// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 100 보다 작은 요소들만 갖는 배열을 리턴해야 합니다.
function lessThan100(number) {
  return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  if (Array.isArray(obj[property])) {
    let newArr = [];
    obj[property].forEach(function(ob) {
      if (typeof ob === 'number' && lessThan100(ob)) {
        newArr.push(ob);
      }
    });
    return newArr;
  }
  return [];
}
