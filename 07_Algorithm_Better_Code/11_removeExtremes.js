function removeExtremes(arr) {
  // 최소, 최대 길이 및 해당 index 초기화
  let minLength = 20;
  let maxLength = 0;
  let minLengthIndex;
  let maxLengthIndex;
  // 입력된 배열을 객체로 변환하기 위한 초기화
  let objOfLength = {};
  for (let i = 0; i < arr.length; i++) {
    // 입력된 배열의 index와 element를 key-value로 갖는 객체 생성
    objOfLength[i] = arr[i];
    // 최소, 최대 길이 및 해당 index 찾기 - 길이가 같을 경우 나중에 위치한 element 선택
    if (arr[i].length <= minLength) {
      minLength = arr[i].length;
      minLengthIndex = i;
    } else if (arr[i].length >= maxLength) {
      maxLength = arr[i].length;
      maxLengthIndex = i;
    }
  }
  // 최종 결과를 위한 새로운 배열 초기화
  let newArr = [];
  // 최소, 최대 길이에 해당되는 element를 삭제하고, 나머지 element들로 구성되는 배열 생성
  for (let key in objOfLength) {
    // 앞선 과정을 통해 찾은 index를 string type으로 바꾸어 key와 비교
    if (key !== String(minLengthIndex) && key !== String(maxLengthIndex)) {
      newArr.push(objOfLength[key]);
    }
  }
  // 최종 결과 배열 반환
  return newArr;
}

/* JavaScript Object에서 key를 number type으로 입력해도 string으로 인식된다.
  다만, 표기할 때 Quotes를 생략한다.
    ex) obj[0]   => {0: 'hello'}
        obj['0'] => {0: 'hello'}
*/

/* JavaScript Object에서 key는 string임을 기억하자!
    ex) 표기 {0: 'hello'} => 실제 key: '0', value: 'hello'
*/
