function getNthElement(arr, index) {
  if (arr.length === 0) {
    return undefined;
  } else if (arr.length-1 < index) {
    return 'out of index range';
  }
  return  arr[index];
}
