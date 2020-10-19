'use strict';
// _.intersection은 여러 개의 배열을 입력받아, 교집합 배열을 리턴합니다.
// 교집합 배열은 모든 배열에 공통으로 등장하는 요소들만을 요소로 갖는 배열입니다.
// 교집합 배열의 요소들은 첫 번째 입력인 배열을 기준으로 합니다.
// 교집합이 없는 경우 빈 배열을 리턴합니다.
_.intersection = function (...args) {
  let _args = _.slice(args);
  let firstArg = _args.shift();
  
  let result = _.filter(firstArg, function(ele) {
      for (let i = 0; i < _args.length; i ++) {
        if (_.indexOf(_args[i], ele) === -1) return false;
      }
      return true;
  });

  return result;
};
