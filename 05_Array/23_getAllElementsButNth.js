function getAllElementsButNth(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i ++) {
    if (i !== n) {
      result.push(arr[i]);
    }
  }
  return result;
}
