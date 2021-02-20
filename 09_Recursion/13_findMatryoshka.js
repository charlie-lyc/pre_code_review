// 문제
// 러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : matryoshka
// 'matryoshka', 'size' 속성을 갖는 재귀적으로 정의된 객체 (입출력 예시 참고)
// matryoshka.matryoshka는 null 또는 matryoshka 객체
// matryoshka.size는 중첩될수록 작아집니다.
// 인자 2 : size
// number 타입의 수

// 출력
// boolean 타입을 리턴해야 합니다.

// 주의 사항
// 함수 findMatryoshka는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 객체는 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 빈 객체를 입력받은 경우, false를 리턴해야 합니다.

// 입출력 예시
// const matryoshka = {
//   size: 10,
//   matryoshka: {
//     size: 9,
//     matryoshka: null,
//   },
// };
// let output = findMatryoshka(matryoshka, 10);
// console.log(output); // --> true
// output = findMatryoshka(matryoshka, 8);
// console.log(output); // --> false

function findMatryoshka(matryoshka, size) {
  if (matryoshka === null || Object.keys(matryoshka).length === 0) {
    return false;
  }
  if (matryoshka.matryoshka === null && matryoshka.size === size) {
    return true;
  }
  return findMatryoshka(matryoshka.matryoshka, size);
}

/**
 * "빈 객체" 임을 나타내는 표현 :
 *  0. obj === undefined
 *  1. Object.keys(obj).length === 0
 *  2. Object.entries(obj).length === 0
 *  3. JSON.stringify(obj) === '{}'
 */

 /**
  * 빈 객체임을 나타내는 표현을 어떤 식으로 사용하든
  * 일단 null 인 경우를 먼저 필터링해야 재귀함수가 제대로 작동된다.
  */
// function findMatryoshka(matryoshka, size) {
//   if (matryoshka === null || matryoshka === undefined) {
//     return false;
//   }
//   if (matryoshka.size === size  && matryoshka.matryoshka === null) {
//     return true;
//   }
//   return findMatryoshka(matryoshka.matryoshka, size);
// }

////////////////////////////////////////////////////////////////////////////////

/**
 * false 반환 조건이 아래와 같을 때는 재귀함수가 제대로 작동되지 않는다!!!
 * 왜냐 하면 null인 경우를 먼저 필터링 하지 않을 경우, 가령 matryoshka === null 이라면,
 * length 속성을 찾을 수 없어 에러가 발생하기 때문이다!!!
 * 최소 matryoshka === {} 인 경우에는 length 속성값은 0이 된다.
 */
// function findMatryoshka(matryoshka, size) {
//   if (Object.keys(matryoshka).length === 0 || matryoshka === null) {
//     return false;
//   }
//   if (matryoshka.matryoshka === null && matryoshka.size === size) {
//     return true;
//   }
//   return findMatryoshka(matryoshka.matryoshka, size);
// }
