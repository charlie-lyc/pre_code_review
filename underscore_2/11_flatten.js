'use strict';
// _.flatten은 다차원 배열을 입력받아, 1차원 배열로 변환하여 리턴합니다.
// 입력으로 전달되는 다차원 배열의 중첩 깊이는 정해져 있지 않습니다.
// 최종적으로 리턴되는 배열에는
//  1. 입력으로 전달되는 다차원 배열의 모든 요소가 포함되어야 합니다.
//  2. 배열인 요소가 없어야 합니다.
// _.each, _.reduce 중 하나 이상을 반드시 사용하여야 합니다.
//
// 힌트
//  1. Array.isArray를 사용할 수 있습니다.
//  2. 중첩의 깊이를 미리 알 수 없으므로, 재귀 함수가 필요합니다.
_.flatten = function (arr) {
  return _.reduce(arr, function(acc, val) {
    if (Array.isArray(val)) {
      return [...acc, ..._.flatten(val)];
    }
    return [...acc, val];
  },[]);
};
