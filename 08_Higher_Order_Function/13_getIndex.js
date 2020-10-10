// 정수를 요소로 갖는 배열과 정수(num)를 입력받아 num을 배열에 추가하고 정렬한다고 가정할 경우, num의 인덱스를 리턴해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.
// arr.sort, arr.indexOf 사용은 금지됩니다.

function getIndex(arr, num) {
  return arr.reduce(function(acc, val) {
    if (val < num) {
      acc ++;
    }
    return acc;
  }, 0);
}

/* 실제 정렬을 구현하지 않고 인덱스 값만 찾음 */
// function getIndex(arr, num) {
//   let count = 0;
//   arr.forEach(function(ar) {
//     if (num > ar) {
//       count ++;
//     }
//   });
//   return count;
// }

/* 실제 정렬을 구현 */
// function getIndex(arr, num) {
//   // 기존 배열에 num추가하고 복사본 생성하기
//   arr.push(num);
//   let newArr = arr.slice();
//   //  정렬된 새로운 배열 생성하기
//   let sortedArr = [];
//   newArr.forEach(function() {
//     let leastNum = Math.min.apply(null, newArr);
//     sortedArr.push(leastNum);
//     newArr = newArr.filter(function(ele) {
//       return ele !== leastNum;
//     });
//   });
//   // 정렬된 배열에서 num의 인덱스 값 찾기
//   let foundIndex;
//   sortedArr.forEach(function(ele, ind) {
//     if (ele === num) {
//       foundIndex = ind;
//     }
//   });
//   // 찾은 인덱스 값 반환
//   return foundIndex;
// }
