'use strict';
// _.difference는 여러 개의 배열을 입력받아, 차집합 배열을 리턴합니다.
// 차집합 배열은 첫 번째 배열에서 차례대로 다음 배열들의 요소들을 제외한 배열입니다.
// 차집합 배열의 요소들은 첫 번째 입력인 배열을 기준으로 합니다.
// 차집합이 없는 경우 빈 배열을 리턴합니다.
_.difference = function (...args) {
  let _args = _.slice(args);
  let firstArg = _args.shift();

  let result = _.filter(firstArg, function(ele) {
      for (let i = 0; i < _args.length; i ++) {
        if (_.indexOf(_args[i], ele) !== -1) return false;
      }
      return true;
  });

  return result;
};
