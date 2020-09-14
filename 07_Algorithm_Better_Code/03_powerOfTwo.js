function powerOfTwo(num) {
  while (true) {
    if (num === 1) {
      return true;
    }
    num = num / 2;
    if (Math.floor(num) !== num) {
      return false;
    }
  }
}

/* 입력받은 수(num)가 2의 거듭제곱인지 여부를 판단 :
    단, Number.isInteger(), Math.log2(), Math.log() 사용 금지
      1. 만약 num이 1이라면 true 반환
      2. 그렇지 않을 경우 num을 2로 나누어 그 몫을 다시 num에 할당하는 과정을 반복하다 1이되면  true 반환(1번 과정)
      3. 다만, 중간에 나눈 결과 몫이 정수가 아니라면 바로 false 반환
      => 결국 생각해야할 핵심 로직은 Number.isInteger()을 쓰지 않고 정수인지 아닌지 판단하는 방법
*/
