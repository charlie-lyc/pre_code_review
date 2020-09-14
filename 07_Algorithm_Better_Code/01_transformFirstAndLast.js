function transformFirstAndLast(arr) {
  if (arr.length === 0) {
    return {};
  }
  let result = {};
  result[arr[0]] = arr[arr.length-1];
  return result;
}
