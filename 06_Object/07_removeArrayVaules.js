// 객체를 입력받아 배열을 값으로 갖는 속성을 모두 제거해야 합니다.

function removeArrayValues(obj) {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      delete obj[key];
    }
  }
}
