'use strict';
// _.drop는 _.take와는 반대로, 처음 n개의 element를 제외한 새로운 배열을 리턴합니다.
// n이 undefined이거나 음수인 경우, 전체 배열을 shallow copy한 새로운 배열을 리턴합니다.
// n이 배열의 길이를 벗어날 경우, 빈 배열을 리턴합니다.
_.drop = function (arr, n) {
  let _arr = _.slice(arr);

  if (n == undefined || n < 0) return _arr;
  if (n > arr.length) return [];

  return _.slice(_arr, n);
};
