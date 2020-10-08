// 임의의 값을 입력받아 타입을 리턴해야 합니다.

function getType(anything) {
  if (anything === null) {
    return 'null';
  } else if (Array.isArray(anything)) {
    return 'array';
  }
  return typeof anything;
}

/** 기본적으로 "typeof"가 식별하는 자료형 6가지
 * 1. 'string'
 * 2. 'number'
 * 3. 'boolean'
 * 4. 'object'
 * 5. 'undefined'
 * 6. 'function'
 *
 * 단, 'array', 'null'은 'object'로 식별되므로 이에 대한 처리가 있어야 한다.
 */
