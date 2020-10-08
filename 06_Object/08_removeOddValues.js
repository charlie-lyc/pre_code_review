// 객체를 입력받아 홀수를 값으로 갖는 속성을 모두 제거해야 합니다.

function removeOddValues(obj) {
  for(let key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 1) {
      delete obj[key];
    }
  }
}
