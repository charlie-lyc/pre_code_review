'use strict';
// _.memoize는 callback 함수에 메모이제이션(memoization)을 적용합니다.
// 메모이제이션은 이미 해결한 문제는 다시 풀지 않는 기법입니다.
// 함수의 호출은 항상 어떤 상태로부터 시작합니다.
// 함수의 호출과 함께 전달받은 인자들 또는 함수의 실행에 영향을 미치는 전역변수들이 이 상태를 결정합니다.
// 같은 상태에서 출발한 함수는 항상 같은 결과를 리턴(해야)합니다.
// 문제를 해결할 때 마다 해당 문제의 답을 기록(메모)해두고,
// 다음에 동일한 문제를 풀 상황이 오면, 앞서 기록한 답을 활용합니다.
// 이 경우, 처음 문제를 풀 때 들였던 노력(연산)이 필요 없습니다.
// _.memoize를 완성한 후에 피보나치 함수에 적용해 보시기 바랍니다.
_.memoize = function (func) {
  let result = {};
  
  return function(...args) {
    if (args in result) return result[args];
    return result[args] = func(...args);
  };
};
