// 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.
// 각 문자열의 길이는 다양합니다.
// 각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.

function readVertically(arr) {
  // 배열 내 가장 긴 문자열 찾기
  let longestStr = arr.reduce(function(acc, val) {
    if (acc.length < val.length) {
      return val;
    }
    return acc;
  }, '');
  // 배열내 문자열들을 세로 방향으로 읽어들일 때 문자열 생성
  let result = '';
  for (let i = 0; i < longestStr.length; i ++) {
    for (let j = 0; j < arr.length; j ++) {
      /* 배열에서 인덱스 범위를 벗어나는 값을 입력할 시 기본적으로 "undefined"가 반환된다. */
      if (arr[j].length !== 0 && arr[j][i] !== undefined) {
        result = result.concat(arr[j][i]);
      }
    }
  }
  return result;
}

// function readVertically(arr) {
//   // 가장 긴 문자열 찾기
//   let maxLength = 0;
//   for (let h = 0; h < arr.length; h++) {
//     if (arr[h].length > maxLength) {
//       maxLength = arr[h].length;
//     }
//   }
//   // 입력된 배열의 길이과 가장 긴 문자열의 길이를 이용해 2차원 문자열 구조에서 수직방향으로 읽기
//   let verticallyRead = '';
//   for (let j = 0; j < maxLength; j++) {
//     for (let i = 0; i < arr.length; i++) {
//       // 단, 문자열의 길이가 다르므로 해당위치에 문자가 없을(null) 경우 읽는 대상에서 제외
//       if (arr[i][j]) {
//         verticallyRead += arr[i][j];
//       }
//     }
//   }
//   return verticallyRead;
// }
