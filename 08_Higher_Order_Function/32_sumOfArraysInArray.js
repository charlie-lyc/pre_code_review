// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 모든 수(number)의 합을 리턴해야 합니다.
function sumOfArraysInArray(arr) {
  let concatenatedArr = arr.reduce(function(acc, val) {
    return acc.concat(val);
  });
  let onlyNumbers = concatenatedArr.filter(function(element) {
    return (typeof element === 'number');
  });
  return onlyNumbers.reduce(function(acc, val) {
    return acc + val;
  }, 0);
}

/* reduce() 에서 "Initial Value" 설정 중요하다. */