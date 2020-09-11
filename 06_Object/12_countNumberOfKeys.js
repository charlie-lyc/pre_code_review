function countNumberOfKeys(obj) {
  let count = 0;
  for (let key in obj) {
    /* 이번 경우에는 객체내의 키 값들을 for loop로 순회하면서 for 구문 내의 블럭으로 진입했을 때
      딱히 특별한 실행 구문이 필요가 없다. 그저 key의 갯수를 구할수 있게 count만 작동되면 된다. */
    count ++;
  }
  return count;
}
