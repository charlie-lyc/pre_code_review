function computeSquareRoot(num) {
  return Math.round(num**(1/2)*100)/100;
}

/*** 소수점에서 반올림하는 방법
    1. Math.round() => 소수 첫째자리에서 반올림하여 정수 형태로 반환
    2. num.toFixed() => 얻고 싶은 소수자리를 옵션으로 입력, 문자열 형태로 반환
***/
