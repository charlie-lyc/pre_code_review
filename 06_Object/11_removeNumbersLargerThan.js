// 수와 객체를 입력받아 입력받은 수보다 큰 수를 갖는 속성을 모두 제거해야 합니다.

function removeNumbersLargerThan(num, obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number' && obj[key] > num) {
      delete obj[key];
    }
  }
}
