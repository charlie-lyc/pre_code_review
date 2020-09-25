// number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 평균을 리턴해야 합니다.
function computeAverageOfNumbers(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let total = arr.reduce(function(acc, val) {
    return acc + val;
  }, 0);
  return total / arr.length; 
}

/* return 값이 바로 "arr.reduce(callback(), 0)"이면
  initail value인 0이 return 값으로 적용되는데, 
  "total / arr.length"으로 연산을 한번 더 거치게 되어서
  적용이 안되는 것 같다.
*/