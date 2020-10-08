// 객체를 입력받아 number 타입의 값을 갖는 속성을 모두 제거해야 합니다.

function removeNumberValues(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      delete obj[key];
    }
  }
}
