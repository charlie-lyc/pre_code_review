'use strict';
// _.reject는 _.filter와 정반대로 test 함수를 통과하지 않는 모든 요소를 담은 새로운 배열을 리턴합니다.

// _.reject = function (arr, test) {
//   let result = [];
//
//   _.each(arr, function(ele) {
//     if (!test(ele)) result.push(ele);
//   });
//
//   return result;
// };

// 앞에서 구현한 `filter` 함수를 사용해서 `reject` 함수를 구현해 보세요.
_.reject = function (arr, test) {

  return _.filter(arr, function(ele) {
    return !test(ele);
  });
};
