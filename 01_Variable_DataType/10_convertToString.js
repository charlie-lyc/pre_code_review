// 이전 문제와는 반대로, 우리가 자바스크립트 코드를 작성을 다 하고 웹 브라우저에 보여줄 때는 보통 string의 형태로 전달됩니다. 마치 우리가 책을 읽을 때도 숫자라고 따로 표시하지 않는 것과 같습니다. string으로 변환하기 위해서는 String() 함수를 사용하면 됩니다.

function convertToString(anything) {
  return String(anything);
}
/** Number Type의 anything이라면 => 숫자형 데이이터에 Quatation Mark만 둘러싸서 반환
 * 물론, anything이 String Type이라면 => 그 값 그대로 반환
 */
