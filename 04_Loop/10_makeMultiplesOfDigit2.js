/*** 초기화 값을 잘 정하면 훨씬 심플하게 만들 수 있다. ***/
function makeMultiplesOfDigit2(num1, num2) {
  let count = 0;
  let a, b;
  if (num1 >= num2) {
    a = num2;
    b = num1;
  } else{
    a = num1;
    b = num2;
  }
  for (let i = a; i < b+1; i++) {
    // 0은 2의 배수가 아니라고 했으므로 확인대상에서 제외
    if (i % 2 === 0 && i !== 0){
      count ++;
    }
  }
  return count;
}
