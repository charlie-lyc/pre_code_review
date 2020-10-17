'use strict';
// _.extend는 여러 개의 객체를 입력받아, 순서대로 객체를 결합합니다.
// 첫 번째 입력인 객체를 기준으로 다음 순서의 객체들의 속성을 덮어씁니다.
// 최종적으로 (속성이 추가된) 첫 번째 객체를 리턴합니다. (새로운 객체 X)
// _.extend로 전달되는 객체의 수는 정해져 있지 않습니다.
// spread syntax 또는 arguments 객체를 사용해야 합니다.
// 함수의 시그니쳐를 적절하게 변형하시기 바랍니다.
// _.each를 사용해서 구현합니다.
_.extend = function (...args) {
  let result = args.shift();
  _.each(args, function(obj) {
    for(let key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
};
