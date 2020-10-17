'use strict';
// _.uniq는 주어진 배열의 요소가 중복되지 않도록 새로운 배열을 리턴합니다.
// 중복 여부의 판단은 엄격한 동치 연산(strict equality, ===)을 사용해야 합니다.
// 입력으로 전달되는 배열의 요소는 모두 primitive value라고 가정합니다.
_.uniq = function (arr) {
  let result = [];

  _.each(arr, function(ele) {
    if (_.indexOf(result, ele) === -1) result.push(ele);
  });

  return result;
};
