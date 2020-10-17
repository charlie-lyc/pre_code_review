'use strict';
// _.slice는 배열의 start 인덱스부터 end 인덱스 이전까지의 요소를 shallow copy하여 새로운 배열을 리턴합니다.
_.slice = function(arr, start, end) {
  // `start`가 undefined인 경우, slice는 0부터 동작합니다.
  let _start = start || 0, _end = end;
  if (start < 0) _start = Math.max(0, arr.length + start);
  // 입력받은 인덱스가 음수일 경우, 마지막 인덱스부터 매칭한다. (예. -1 => arr.length - 1, -2 => arr.length - 2)
  // 입력받은 인덱스는 0 이상이어야 합니다.
  if (end < 0) _end = Math.max(0, arr.length + end);
  if (_end === undefined || _end > arr.lenght) _end = arr.length;
  // `end`가 생략될 경우(undefined), slice는 마지막 인덱스까지 동작합니다.
  // `end`가 배열의 범위를 벗어날 경우, slice는 마지막 인덱스까지 동작합니다.
  // `start`가 배열의 범위를 벗어날 경우, 빈 배열을 리턴합니다.
  let result = [];
  for (let i = _start; i < _end; i ++) {
    result.push(arr[i]);
  }

  return result;
};
