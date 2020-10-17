'use strict';
// _.map은 iteratee(반복되는 작업)를 배열의 각 요소에 적용(apply)한 결과를 담은 새로운 배열을 리턴합니다.
// 함수의 이름에서 드러나듯이 _.map은 배열의 각 요소를 다른 것(iteratee의 결과)으로 매핑(mapping)합니다.
_.map = function (arr, iteratee) {
  // _.map 함수는 매우 자주 사용되는 iterator입니다.
  // _.each 함수와 비슷하게 동작하지만, 각 요소에 iteratee를 적용한 결과를 리턴합니다.
  let result = [];

  _.each(arr, function(ele) {
    result.push(iteratee(ele));
  });

  return result;
};
