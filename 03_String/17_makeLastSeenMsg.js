function makeLastSeenMsg(name, period) {
  let notConnectPeriod;
  if (period < 60) {
    notConnectPeriod = period + '분';
  } else if (60 <= period && period < 1440) {
    notConnectPeriod = Math.floor(period/60) + '시간';
  } else if (period >= 1440) {
    notConnectPeriod = Math.floor(period/1440)  + '일';
  }
  return `${name}: ${notConnectPeriod} 전에 접속함`;
}
