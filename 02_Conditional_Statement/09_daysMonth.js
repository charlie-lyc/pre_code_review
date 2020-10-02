// 특정 달(month)을 입력받아 각 달에 몇 일이 있는지 리턴해야 합니다.

function daysInMonth(month) {
  if (month === 2) {
    return 28;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    return 31;
  }
}
