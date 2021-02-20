// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 'B'의 위치 정보를 요소로 갖는 배열을 리턴해야 합니다.
// arr[i]는 'A' 또는 'B'만을 요소로 갖는 배열
// 'B'의 위치 정보(행, 열)를 요소로 갖는 배열을 리턴해야 합니다.
// 배열의 요소는 차례대로 행, 열입니다. ([행, 열])
// 행: 'B'를 요소로 갖는 배열 arr[i]의 인덱스 i
// 열: arr[i]에서 'B'(arr[i][j])의 인덱스 j

function findBugInApples(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i].indexOf('B') !== -1) {
      result.push(i);
      result.push(arr[i].indexOf('B'));
    }
  }
  return result;
}

// function findBugInApples(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === 'B') {
//         return [i, j];
//       }
//     }
//   }
// }

/**
 * Two Dimensional Lookup(Search) :
 * 이중 for loop 구문이 제대로 작동되기 위해서 반복자 i, j의 관계 및 범위 설정이 매우 중요하다!!!
 */
