// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 100 보다 작은 요소들만 갖는 배열을 리턴해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 대소 비교는 number 타입에만 적용합니다.
// 주어진 키에 해당하는 값이 배열이고, 100 미만인 요소가 있는 경우에만 해당 요소를 갖는 배열을 리턴해야 합니다.
// 주어진 보조 함수(lessThan100)를 사용해야 합니다.
function lessThan100(number) {
  return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  if ((property in obj) && Array.isArray(obj[property])) {
    return obj[property].filter(function(ele) {
      return (typeof ele === 'number') && lessThan100(ele);
    });
  }
  return [];
}

// function getElementsLessThan100AtProperty(obj, property) {
//   if (Array.isArray(obj[property])) {
//     let newArr = [];
//     obj[property].forEach(function(ob) {
//       if (typeof ob === 'number' && lessThan100(ob)) {
//         newArr.push(ob);
//       }
//     });
//     return newArr;
//   }
//   return [];
// }
