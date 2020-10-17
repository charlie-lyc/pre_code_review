'use strict';
// _.every는 배열의 모든 요소가 test 함수(iteratee)를 통과하면 true를, 그렇지 않은 경우 false를 리턴합니다.
// test(element)의 결과(return 값)가 truthy일 경우, 통과입니다.
// _.each를 반드시 사용할 필요는 없습니다.
// iteratee가 주어지지 않을 경우, 모든 요소가 truthy인지 확인합니다.
// 빈 배열을 입력받은 경우, true를 리턴해야 합니다. (공허하게 참, vacantly true)

/* _.filter를 사용해 구현하면 아래와 같습니다. */
_.every = function (arr, iteratee) {
  if (iteratee === undefined) iteratee = _.identity;
  let result = _.filter(arr, function(ele) {
    return iteratee(ele);
  });
  if (result.length === arr.length) return true;
  return false;
};

/* for loop를 사용해 구현하면 아래와 같습니다. */
// _.every = function (arr, iteratee) {
//   if (iteratee === undefined) iteratee = _.identity;
//   let result = true;
//   for (let i = 0; i < arr.length; i ++) {
//     if (!iteratee(arr[i])) {
//       result = false;
//       break;
//     }
//   }
//   return result;
// };
