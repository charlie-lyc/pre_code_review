function isOdd(num) {
  let absNum = Math.abs(num);
  while (absNum > 1) {
    absNum = absNum - 2;
  }
  if (absNum === 1) {
    return true;
  }
  return false;
}
