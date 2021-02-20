// 연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.

function computeWhenDouble(interestRate) {
  let year = 0;
  while ((1 + interestRate/100) ** year < 2) {
    year ++;
  }
  return year;
}

/**
 * 금리가 고정금리 i percent일때 n년이 지난후 원금과 이자 합계 구하는 공식
 * =>  (1 + (i/100)) ** n
 */

 function computeWhenDouble(interestRate) {
   let year = 0;
   while (true) {
     year ++;
     if ((1 + interestRate/100) ** year) >= 2) {
       return year;
     }
   }
 }

 // function computeWhenDouble(interestRate) {
 //   let year = 0;
 //   while (true) {
 //     year ++;
 //     let total =  (1 + interestRate/100) ** year;
 //     if (total >= 2) {
 //       break;
 //     }
 //   }
 //   return year;
 // }
