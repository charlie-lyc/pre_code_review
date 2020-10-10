// 두 개의 배열을 입력받아 배열들의 요소를 모두 담고 있는 단일 배열을 리턴해야 합니다.
// 배열의 모든 요소들을 깊이 1 까지 단일 배열로 이어붙인 배열을 리턴해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.
// arr.flat 사용은 금지됩니다.

function joinArrayOfArrays(arr) {
  return arr.reduce(function(acc, innerArr) {
    return acc.concat(innerArr);
  });
}

/**
 * "nestedArr.flat(<option>)" : 'nested array'의 깊이를 낮추는 메소드
 * '<option>'은 'nested array'의 깊이를 의미하고, default값은 1이다.
 * 예를 들어, 깊이가 1인 2차원 배열에 flat()을 실행하면 1차원 배열이 된다.
 * 다시 말해, 깊이가 n인 arr를 1차원 배열로 만들기 위해서는 "arr.flat(n)"를 실행해야 한다.
 */
