function numberSearch(str) {
  if (str.length === 0) {
    return 0;
  }
  let sumOfNum = 0;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      sumOfNum += Number(str[i]);
    } else if (str[i] !== ' ') {
      newStr += str[i];
    }
  }
  return Math.round(sumOfNum/newStr.length);
}

/*** 정수인지 확인 메소드 : Number 객체
      Number.isInteger()
***/
/*** 숫자가 아닌지 확인 메소드 : 전역 객체
      isNaN()
***/
