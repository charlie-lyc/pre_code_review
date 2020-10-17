'use strict';
// _.filter는 test 함수를 통과하는 모든 요소를 담은 새로운 배열을 리턴합니다.
// test(element)의 결과(return 값)가 truthy일 경우, 통과입니다.
// test 함수는 각 요소에 반복 적용됩니다.
_.filter = function (arr, test) {
  let result = [];

  _.each(arr, function(ele) {
    if (test(ele)) result.push(ele);
  });

  return result;
};
