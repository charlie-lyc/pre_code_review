'use strict';
// _.reduce는
//  1. 배열을 순회하며 각 요소에 iteratee 함수를 적용하고,
//  2. 그 결과값을 계속해서 누적(accumulate)합니다.
//  3. 최종적으로 누적된 결과값을 리턴합니다.
// 예를 들어, 배열 [1, 2, 3, 4]를 전부 더해서 10이라는 하나의 값을 리턴합니다.
// 각 요소가 처리될 때마다 누적되는 값은 차례대로 1, 1+2, 1+2+3, 1+2+3+4 입니다.
// 이처럼 _.reduce는 배열이라는 다수의 정보가 하나의 값으로 축소(응축, 환원, reduction)되기 때문에 reduce라는 이름이 붙게 된 것입니다.
// 따라서 최종적인 형태는 아래와 같습니다.
//  _.reduce(arr, iteratee, initVal)
//  iteratee(acc, ele, idx, arr)
_.reduce = function (arr, iteratee, initVal) {
  let _arr = _.slice(arr);
  let acc = initVal;
  if (initVal === undefined) {
    acc = _arr[0];
    _arr.shift();
  }

  _.each(_arr, function(ele, idx, _arr) {
    acc = iteratee(acc, ele, idx, _arr);
  });

  return acc;
};
