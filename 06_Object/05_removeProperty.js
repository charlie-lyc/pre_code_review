// 객체와 키를 입력받아 키가 가르키는 속성(property)을 제거해야 합니다.

function removeProperty(obj, property) {
  delete obj[property];
}

/**
 * 객체(object)의 속성(property)를 삭제할 때는 키워드 "delete"를 사용한다.
 */
