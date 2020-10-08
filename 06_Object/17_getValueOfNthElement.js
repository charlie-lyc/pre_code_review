// 배열과 수를 입력받아 수가 가르키는 인덱스에 해당하는 객체의 'name' 속성값을 리턴해야 합니다.
// 배열의 범위를 벗어나는 인덱스를 입력받은 경우, 마지막 객체의 'name' 속성값을 리턴해야 합니다.

function getValueOfNthElement(arr, num) {
  if (arr.length === 0) {
    return 'no name';
  } else if (arr.length - 1 < num) {
    return arr[arr.length - 1].name;
  }
  return arr[num].name;
}

// function getValueOfNthElement(arr, num) {
//   if (arr.length === 0) {
//     return 'no name';
//   } else if (arr.length - 1 < num) {
//     num = arr.length - 1;
//   }
//   return arr[num].name;
// }
