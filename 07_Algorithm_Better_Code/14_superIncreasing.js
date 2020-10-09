// 수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.
// boolean 타입을 리턴해야 합니다.
// arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 합니다.

function superIncreasing(arr) {
  // i의 초기값을 1로 시작함으로써 배열의 첫번째 값을 기준으로 시작
  for (let i = 1; i < arr.length + 1; i ++) {
    // i-1번째 까지의 배열 구하기
    let beforeArr = arr.slice(0, i);
    // i-1번째 까지의 합 구하기
    let sumOfBefore = beforeArr.reduce(function(acc, val) {
      return acc + val;
    }, 0);
    // 현재 요소보다 이전 요소들의 합이 크거나 같으면 바로 false 반환
    if (sumOfBefore >= arr[i]) {
      return false;
    }
  }
  // for loop 끝까지 진행 완료된다면 true 반환
  return true;
}

// function superIncreasing(arr) {
//   // i가 0부터 시작하게 되면 비교대상이 없게 되므로 for 구문이 작동되기 위해 i는 최소 1부터 시작
//   for (let i = 1; i < arr.length; i++) {
//     let sumOfBefore = 0;
//     // i의 최소 시작점이 1이므로 j의 최소 시작점은 0
//     for (let j = 0; j < i; j++) {
//       sumOfBefore += arr[j];
//     }
//     if (sumOfBefore >= arr[i]) {
//       return false;
//     }
//   }
// return true;
// }
