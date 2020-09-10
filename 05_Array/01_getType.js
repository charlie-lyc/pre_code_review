function getType(anything) {
  // anthing 이 null 로 입력될 때 필터링
  if (anything === null) {
    return 'null';
  }

  let takenType = typeof anything;
  if (takenType === 'object') {
    if (Array.isArray(anything)) {
      takenType = 'array';
    }
  }
  return takenType;
}

/* 기본적으로 'typeof'는 아래의 두가지 경우 이외에는 모든 자료형
  (string, number, object, function, null(입력값이 없는 경우), undefined)을 식별한다.

  1. "null" 키워드로 값이 입력되는 경우
  2. type은 'object'로 식별되는데 "array"가 따로 구분되지 않는 경우

*/
