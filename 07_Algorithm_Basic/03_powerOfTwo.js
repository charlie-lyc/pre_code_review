// 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

function powerOfTwo(num) {
  while (num > 1) {
    if (num % 2 !== 0) {
      return false;
    }
    num = num / 2;
  }
  return true;
}

/**
 * 좀더 간단한 로직 :
 * 단, Number.isInteger(), Math.log2(), Math.log() 사용 금지
 *  1. 2로 나눈 나머지가 0이 아니면(즉, 1이면), loop 중간 언제든지 바로 false 반환
 *  2. 2로 나눈 나머지가 0이면, 2로 나눈 몫을 num에 계속 재할당하면서 loop 진행
 *  3. num이 1보다 큰 조건(즉, 1이 될 때까지)에서 loop가 끝까지 진행되면, loop를 탈출하여 true 반환
 */


////////////////////////////////////////////////////////////////////////////////

// function powerOfTwo(num) {
//   while (num > 1) {
//     num = num / 2;
//     if (Math.floor(num) !== num) {
//       return false;
//     }
//   }
//   return true;
// }

// function powerOfTwo(num) {
//   while (true) {
//     if (num === 1) {
//       return true;
//     }
//     num = num / 2;
//     if (Math.floor(num) !== num) {
//       return false;
//     }
//   }
// }

/**
 * 입력받은 수(num)가 2의 거듭제곱인지 여부를 판단 :
 * 단, Number.isInteger(), Math.log2(), Math.log() 사용 금지
 *  1. 만약 num이 1이라면 true 반환
 *  2. 그렇지 않을 경우 num을 2로 나누어 그 몫을 다시 num에 할당하는 과정을 반복하다 1이되면  true 반환(1번 과정)
 *  3. 다만, 중간에 나눈 결과 몫이 정수가 아니라면 바로 false 반환
 *  => 결국 생각해야할 핵심 로직은 Number.isInteger()을 쓰지 않고 정수인지 아닌지 판단하는 방법
 */
