function computeWhenDouble(interestRate) {
  let year = 1;
  while (true) {
    if ((1 + (interestRate/100)) ** year >= 2) {
      return year;
    }
    year ++;
  }
}


/* 금리가 고정금리 i percent일때 n년이 지난후 원금과 이자 합계 구하는 공식
  =>  (1 + (i/100)) ** n
*/
