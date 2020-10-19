'use strict';
// _.throttle은 입력으로 전달되는 시간(ms, 밀리초)동안에 callback 함수를 단 한번만 실행되는 함수를 반환합니다.
// 리턴되는 함수는 구간의 길이가 입력의 크기인 임의의 구간에서 callback 함수를 한 번만 실행되어야 합니다.
// 예를 들어, _.throttle(func, 100)가 리턴하는 함수는 적어도 100ms 간격을 사이에 두고 callback 함수를 실행해야 합니다.
_.throttle = function (func, wait) {
  let toggle = false;

  return function() {
    toggle = !toggle;
    if (toggle) {
      setTimeout(func, wait);
    }
  };
};
