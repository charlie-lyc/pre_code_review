// 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.
// 가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
// 가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.

function removeExtremes(arr) {
  // 배열내에서 가장 짧은 문자열 찾기(길이가 동일할 경우 마지막 문자열)
  let shortestStr = arr.reduce(function(acc, val) {
    if (acc.length >= val.length) {
      return val;
    }
    return acc;
  });
  // 배열내에서 가장 긴 문자열 찾기(길이가 동일할 경우 마지막 문자열)
  let longestStr = arr.reduce(function(acc, val) {
    if (acc.length <= val.length) {
      return val;
    }
    return acc;
  });
  // 앞서 찾은 2 문자열의 배열내 인덱스 찾기(동일한 문자열이 있을 경우 마지막 문자열)
  let lastIndexOfShortest = arr.lastIndexOf(shortestStr);
  let lastIndexOfLongest = arr.lastIndexOf(longestStr);
  // 앞서 찾은 2 인덱스를 제외한 나머지 요소들 배열로 반환
  return arr.filter(function(ele, ind) {
    return ind !== lastIndexOfShortest && ind !== lastIndexOfLongest;
  });
}

////////////////////////////////////////////////////////////////////////////////

/**
 * JavaScript Object에서 key를 number type으로 입력해도 string으로 인식된다.
 * 다만, 표기할 때 Quotes를 생략한다.
 *  ex) obj[0] = 'hello'   => {0: 'hello'}
 *      obj['0'] = 'hello' => {0: 'hello'}
 */

/**
 * JavaScript Object에서 key는 string임을 기억하자!
 *  ex) 표기 {0: 'hello'} => 실제 key: '0', value: 'hello'
 */

// function removeExtremes(arr) {
//   // 최소, 최대 길이 및 해당 index 초기화
//   let minLength = 20;
//   let maxLength = 0;
//   let minLengthIndex;
//   let maxLengthIndex;
//   // 입력된 배열을 객체로 변환하기 위한 초기화
//   let objOfLength = {};
//   for (let i = 0; i < arr.length; i++) {
//     // 입력된 배열의 index와 element를 key-value로 갖는 객체 생성
//     objOfLength[i] = arr[i];
//     // 최소, 최대 길이 및 해당 index 찾기 - 길이가 같을 경우 나중에 위치한 element 선택
//     if (arr[i].length <= minLength) {
//       minLength = arr[i].length;
//       minLengthIndex = i;
//     } else if (arr[i].length >= maxLength) {
//       maxLength = arr[i].length;
//       maxLengthIndex = i;
//     }
//   }
//   // 최종 결과를 위한 새로운 배열 초기화
//   let newArr = [];
//   // 최소, 최대 길이에 해당되는 element를 삭제하고, 나머지 element들로 구성되는 배열 생성
//   for (let key in objOfLength) {
//     // 앞선 과정을 통해 찾은 index를 string type으로 바꾸어 key와 비교
//     if (key !== String(minLengthIndex) && key !== String(maxLengthIndex)) {
//       newArr.push(objOfLength[key]);
//     }
//   }
//   // 최종 결과 배열 반환
//   return newArr;
// }
