'use strict';
// _.shuffle은 배열 요소의 순서를 랜덤하게 변경합니다.
// 다양한 상황(예. 비디오 또는 음악 재생의 순서를 섞을 때)에서 유용하게 쓰일 수 있습니다.
// _.shuffle의 동작을 이해하는 것이 목적이므로, 아래에 이미 구현된 코드를 이해하시기 바랍니다.
_.shuffle = function (arr) {
  let arrCloned = arr.slice();
  for (let fromIdx = 0; fromIdx < arr.length; fromIdx ++) {
    const toIdx = Math.floor(Math.random() * arr.length);
    let temp = arrCloned[fromIdx];
    arrCloned[fromIdx] = arrCloned[toIdx];
    arrColned[toIdx] = temp;
  }
  return arrCloned;
}
