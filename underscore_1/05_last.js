'use strict';
// _.last는 배열의 마지막 n개의 element를 담은 새로운 배열을 리턴합니다.
// n이 undefined이거나 음수인 경우, 배열의 마지막 요소만을 담은 배열을 리턴합니다.
// n이 배열의 길이를 벗어날 경우, 전체 배열을 shallow copy한 새로운 배열을 리턴합니다.
// _.take와 _.drop 중 일부 또는 전부를 활용할 수 있습니다.
_.last = function (arr, n) {
  let _arr = _.slice(arr);

  if (n === undefined || n < 0) return [ arr[arr.length - 1] ];
  if (n > arr.length) return _arr;

  return _.slice(_arr, arr.length - n);
};
