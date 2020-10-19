'use strict';
// _.delay는 입력으로 전달되는 시간(ms, 밀리초)후 callback 함수를 함께 전달되는 (임의의 개수의) 인자와 함께 실행합니다.
// 예를 들어, _.delay(func, 500, 'a', 'b')의 결과로 '최소' 500m가 지난 이후에 func('a', 'b')가 호출됩니다.
_.delay = function (func, wait, ...args) {
  setTimeout(func, wait, ...args);
};
