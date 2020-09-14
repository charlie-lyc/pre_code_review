function superIncreasing(arr) {
  // i가 0부터 시작하게 되면 비교대상이 없게 되므로 for 구문이 작동되기 위해 i는 최소 1부터 시작
  for (let i = 1; i < arr.length; i++) {
    let sumOfBefore = 0;
    // i의 최소 시작점이 1이므로 j의 최소 시작점은 0
    for (let j = 0; j < i; j++) {
      sumOfBefore += arr[j];
    }
    if (sumOfBefore >= arr[i]) {
      return false;
    }
  }
return true;
}
