'use strict';
// _.defaults는 _.extend와 비슷하게 동작하지만, 이미 존재하는 속성(key)을 덮어쓰지 않습니다.
_.defaults = function (...args) {
  let result = args.shift();
  _.each(args, function(obj) {
    for(let key in obj) {
      if (!(key in result)) result[key] = obj[key];
    }
  });
  return result;
};
