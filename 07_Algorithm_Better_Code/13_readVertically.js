function readVertically(arr) {
  // 가장 긴 문자열 찾기
  let maxLength = 0;
  for (let h = 0; h < arr.length; h++) {
    if (arr[h].length > maxLength) {
      maxLength = arr[h].length;
    }
  }
  // 입력된 배열의 길이과 가장 긴 문자열의 길이를 이용해 2차원 문자열 구조에서 수직방향으로 읽기
  let verticallyRead = '';
  for (let j = 0; j < maxLength; j++) {
    for (let i = 0; i < arr.length; i++) {
      // 단, 문자열의 길이가 다르므로 해당위치에 문자가 없을(null) 경우 읽는 대상에서 제외
      if (arr[i][j]) {
        verticallyRead += arr[i][j];
      }
    }
  }
  return verticallyRead;
}
