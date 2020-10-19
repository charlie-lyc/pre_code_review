'use strict';
// _.once는 callback 함수를 한 번만 호출하는 '함수'를 리턴합니다.
// _.once가 리턴하는 함수를 여러 번 호출해도 callback 함수는 한 번 이상 호출되지 않습니다.
_.once = function (func) {
  let result;
  let callCount = 0;

  return function(...args) {
    callCount ++;
    if (callCount === 1) return result = func(...args);
    return result;
  };
};
