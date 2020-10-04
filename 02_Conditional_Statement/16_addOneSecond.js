// 시, 분, 초를 입력받아 1초를 더한 결과값을 특정 형태의 메시지로 리턴해야 합니다.

function addOneSecond(hour, minute, second) {
  if (second + 1 === 60) {
    second = 0;
    if (minute + 1 === 60) {
      minute = 0;
      if (hour + 1 === 24) {
        hour = 0;
      } else {
        hour = hour + 1;
      }
    } else {
      minute = minute + 1;
    }
  } else {
    second = second + 1;
  }
  return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`;
}

// function addOneSecond(hour, minute, second) {
//   if (second + 1 !== 60) {
//     second = second + 1;
//   } else {
//     second = 0;
//     if (minute + 1 !== 60) {
//       minute = minute + 1;
//     } else {
//       minute = 0;
//       if (hour + 1 !== 24) {
//         hour = hour + 1;
//       } else {
//         hour = 0;
//       }
//     }
//   }
//   return '1초 뒤에 '+ hour +'시 '+ minute +'분 '+ second +'초 입니다';
// }
