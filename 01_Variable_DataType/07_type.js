// 이제 우리는 변수를 선언하고, 값을 할당하는 법에 대해서 배웠습니다. 자바스크립트의 모든 값(value)는 각자 타입을 가지고 있습니다. 평소에 우리는 무의식적으로 숫자와 문자를 구분하지 않고 이야기하지만, 우리는 이를 무의식적으로 구분할 수 있을 만큼 똑똑합니다. 문맥을 이해할 수 있기 때문이죠. 하지만 컴퓨터는 상황과 문맥을 이해하는 능력이 없습니다.

let thing, num;

/* String Type */
thing = '두루마리 휴지';
/*  Number Type */
num = 3;

function goGet(thing, num) {
  return '혜선아, 가서' + thing + ' ' + num + ' 개 가져다 줄래?';
}

/** Data Type
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Array
 * 5. Object
 * 6. Undefined
 * 7. Function
 */
