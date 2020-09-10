function getElementsUpTo(arr, n) {
  if (n > arr.length - 1) {
    return [];
  }
  return arr.slice(0, n);
}
