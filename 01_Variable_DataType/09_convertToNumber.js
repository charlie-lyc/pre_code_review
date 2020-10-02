// 우리가 웹 브라우저에 적혀있는 정보를 가져오면 보통 string의 형태로 받아오게 됩니다. 즉, 숫자로 세고 싶은 정보도 string으로 인식하기 때문에, 정상적인 숫자를 위한 연산을 수행할 수 없습니다.
// 이를 해결하기 위해서 타입을 변경하는 방법에 대해서 알아볼까요? number로 변경하기 위해서는 Number() 함수를 사용해서 변경할 수 있습니다.

function convertToNumber(anything) {
  return Number(anything);
}
/** String Type의 anything에서 Quatation Mark를 제외하고 나머지 부분이
 * 숫자형 데이터라면 => 숫자형 데이터 반환
 * 그렇지 않다면 => NaN 반환
 * 물론, anything이 Number Type이라면 => 그 값 그대로 반환
 */
