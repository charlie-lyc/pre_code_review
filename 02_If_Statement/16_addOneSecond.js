function addOneSecond(hour, minute, second) {
  if (second + 1 !== 60) {
    second = second + 1;
  } else {
    second = 0;
    if (minute + 1 !== 60) {
      minute = minute + 1;
    } else {
      minute = 0;
      if (hour + 1 !== 24) {
        hour = hour +1;
      } else {
        hour = 0;
      }
    }
  }
  return '1초 뒤에 '+ hour +'시 '+ minute +'분 '+ second +'초 입니다';
}
