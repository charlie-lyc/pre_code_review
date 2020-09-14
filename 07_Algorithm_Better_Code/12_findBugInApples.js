function findBugInApples(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'B') {
        return [i, j];
      }
    }
  }
}

/*** Two Dimensional Lookup(Search)
    : 이중 for loop 구문이 제대로 작동되기 위해서 반복자 i, j의 관계 및 범위 설정이 매우 중요하다!!!
***/
