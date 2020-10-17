'use strict';
// _.zip은 여러 개의 배열을 입력받아, 같은 index의 요소들을 묶어 배열로 만듭니다.
// 각 index 마다 하나의 배열을 만들고, 최종적으로 이 배열들을 요소로 갖는 배열을 리턴합니다.
// _.zip의 입력으로 전달되는 배열이 수는 정해져 있지 않고, 각 배열의 길이는 다를 수 있습니다.
// 최종적으로 리턴되는 배열의 각 요소의 길이는 입력으로 전달되는 배열 중 가장 '긴' 배열의 길이로 통일됩니다.
// 특정 index에 요소가 없는 경우, undefined를 사용합니다.
// _.each, _.reduce, _.pluck 중 하나 이상을 반드시 사용하여야 합니다.
_.zip = function (...args) {
  let longest = _.reduce(args, function(acc, val) {
    if (acc < val.length) return val.length;
    return acc;
  }, 0);

  let result = [];
  for (let i = 0; i < longest; i ++) {
    result.push(_.pluck(args, i));
  }
  return result;
};
