'use strict';
// _.some은 배열의 요소 중 하나라도 test 함수(iteratee)를 통과하면 true를, 그렇지 않은 경우 false를 리턴합니다.
// 빈 배열을 입력받은 경우, false를 리턴해야 합니다.
// 그 외 조건은 앞서 _.every와 동일합니다.

/* _.filter를 사용해 구현하면 아래와 같습니다. */
_.some = function (arr, iteratee) {
  if (iteratee === undefined) iteratee = _.identity;
  let result = _.filter(arr, function(ele) {
    return iteratee(ele);
  });
  if (result.length > 0) return true;
  return false;
};

/* for loop를 사용해 구현하면 아래와 같습니다. */
// _.some = function (arr, iteratee) {
//   if (iteratee === undefined) iteratee = _.identity;
//   for (let i = 0; i < arr.length; i ++) {
//     if (iteratee(arr[i])) {
//       return true;
//     }
//   }
//   return false;
// };
