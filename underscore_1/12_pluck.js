'use strict';
// _.pluck은
//  1. 객체 또는 배열을 요소로 갖는 배열과 각 요소에서 찾고자 하는 key 또는 index를 입력받아
//  2. 각 요소의 해당 값 또는 요소만을 추출하여 새로운 배열에 저장하고,
//  3. 최종적으로 새로운 배열을 리턴합니다.
// 예를 들어, 각 개인의 정보를 담은 객체를 요소로 갖는 배열을 통해서, 모든 개인의 나이만으로 구성된 별도의 배열을 만들 수 있습니다.
// 최종적으로 리턴되는 새로운 배열의 길이는 입력으로 전달되는 배열의 길이와 같아야 합니다.
// 따라서 찾고자 하는 key 또는 index를 가지고 있지 않은 요소의 경우, 추출 결과는 undefined 입니다.
_.pluck = function (arr, keyOrIdx) {
  // _.pluck은 _.map을 사용해 구현하시기 바랍니다.
  return _.map(arr, function(ele) {
    return ele[keyOrIdx];
  });
};

// _.pluck을 _.each를 사용해 구현하면 아래와 같습니다.
// _.pluck = function (arr, keyOrIdx) {
//   let result = [];
//
//   _.each(arr, function (item) {
//     result.push(item[keyOrIdx]);
//   });
//
//   return result;
// };
