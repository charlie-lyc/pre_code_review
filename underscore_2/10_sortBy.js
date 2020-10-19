'use strict';
// _.sortBy는 배열의 각 요소에 함수 transform을 적용하여 얻은 결과를 기준으로 정렬합니다.
// transform이 전달되지 않은 경우, 배열의 요소 자체끼리 비교를 합니다.
// 세 번째 인자인 order는 정렬의 방향을 나타냅니다. 생략되거나 1을 입력받은 경우 오름차순, -1을 입력받은 경우 내림차순으로 정렬합니다.
// 힌트
//  1. Array.prototype.sort를 사용할 수 있습니다.
//    참고 문서: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/arr/sort
//  2. _.identity를 사용할 수 있습니다.
_.sortBy = function (arr, transform, order) {
  let _arr = _.slice(arr);
  if (transform === undefined) transform = _.identity;
  if (order === undefined) order = 1;

  _arr.sort(function(a, b) {
    if (transform(a) < transform(b)) return -1 * order;
    return 1 * order;
  });

  return _arr;
};
