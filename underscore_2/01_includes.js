'use strict';
// _.includes는 배열이 주어진 값을 포함하는지 확인합니다.
// 일치 여부의 판단은 엄격한 동치 연산(strict equality, ===)을 사용해야 합니다.
// 입력으로 전달되는 배열의 요소는 모두 primitive value라고 가정합니다.
_.includes = function (arr, target) {
  return _.indexOf(arr, target) !== -1;
};
