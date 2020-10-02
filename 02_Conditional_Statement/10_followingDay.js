// 요일을 입력받아 해당 요일의 다음 요일을 리턴해야 합니다.

function followingDay(day) {
  let nextDay;
  if (day === '월요일') {
    nextDay = '화';
  } else if (day === '화요일') {
    nextDay = '수';
  } else if (day === '수요일') {
    nextDay = '목';
  } else if (day === '목요일') {
    nextDay = '금';
  } else if (day === '금요일') {
    nextDay = '토';
  } else if (day === '토요일') {
    nextDay = '일';
  } else if (day === '일요일') {
    nextDay = '월';
  } else {
    return '올바른 요일이 아닙니다';
  }
  return nextDay + '요일';
}
