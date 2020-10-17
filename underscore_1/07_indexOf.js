'use strict';
// _.indexOf는 target으로 전달되는 값이 arr의 요소인 경우, 배열에서의 위치(index)를 리턴합니다.
// 그렇지 않은 경우, -1을 리턴합니다.
// target이 중복해서 존재하는 경우, 가장 낮은 index를 리턴합니다.
_.indexOf = function (arr, target) {
  // 배열의 모든 요소에 접근하려면, 순회 알고리즘(iteration algorithm)을 구현해야 합니다.
  // 반복문을 사용하는 것이 가장 일반적이지만, 지금부터는 이미 구현한 _.each 함수를 활용하여야 합니다.
  let result = -1;

  _.each(arr, function(item, index) {
    if (item === target && result === -1) result = index;
  });

  return result;
}
