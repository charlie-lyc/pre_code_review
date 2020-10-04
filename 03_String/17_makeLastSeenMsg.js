// 사용자의 이름과 미접속 시간(분)을 입력받아 조건별로 다른 메세지를 리턴해야 합니다.

function makeLastSeenMsg(name, period) {
  let notConnectPeriod;
  if (period < 60) {
    notConnectPeriod = String(period) + '분';
  } else if (60 <= period && period < 1440) {
    notConnectPeriod = String(Math.floor(period/60)) + '시간';
  } else if (period >= 1440) {
    notConnectPeriod = String(Math.floor(period/1440))  + '일';
  }
  return `${name}: ${notConnectPeriod} 전에 접속함`;
}

// function makeLastSeenMsg(name, period) {
//   let day = Math.floor(period / 1440);
//   let hour = Math.floor((period % 1440) / 60);
//   let min = (period % 1440) % 60;
//   let notConnect;
//   if (day) {
//     notConnect = String(day) + '일';
//   } else if (hour) {
//     notConnect = String(hour) + '시간';
//   } else {
//     notConnect = String(min) + '분';
//   }
//   return `${name}: ${notConnect} 전에 접속함`;
// }
