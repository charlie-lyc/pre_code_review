'use strict';
// _.zipStrict은 _.zip과 비슷하게 동작하지만,
// 최종적으로 리턴되는 배열의 각 요소의 길이는 입력으로 전달되는 배열 중 가장 '짧은' 배열의 길이로 통일됩니다.
// 그 외 조건은 앞서 _.zip과 동일합니다.
_.zipStrict = function (...args) {
  let shortestArg = _.reduce(args, function(acc, val) {
    if (acc.length > val.length) return val;
    return acc;
  });

  let result = [];
  for (let i = 0; i < shortestArg.length; i ++) {
    result.push(_.pluck(args, i));
  }
  return result;
};
