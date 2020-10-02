// 수를 입력받아 홀수인지 여부를 리턴해야 합니다.

function isOdd(num) {
  if (num === 1 || num === -1) {
    return true;
  } else if (num === 0) {
    return false;
  }

  if (num > 1) {
    return isOdd(num - 2);
  } else if (nem < -1) {
    return isOdd(num + 2);
  }

}
