function select(arr, obj) {
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      newObj[arr[i]] = obj[arr[i]];
    }
  }
  return newObj;
}
