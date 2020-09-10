function getLargestElement(arr) {
  // '초기화 값을 어떻게 정할 것인가?' 계속 주의하도록
  let maxNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
}
