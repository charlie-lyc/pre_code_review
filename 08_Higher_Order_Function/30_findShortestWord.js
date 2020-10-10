// 배열을 입력받아 배열에서 가장 짧은 길이를 가진 문자열 요소를 리턴해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 같은 길이의 요소가 있다면 배열의 앞쪽에 있는 요소를 리턴해야 합니다.
// 배열에는 문자열 외에 다른 요소들이 있을 수 있습니다.
// 빈 배열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 주어진 배열에 문자열이 없는 경우, 빈 문자열을 리턴해야 합니다.

function findShortestWord(arr) {
  if (arr.length === 0) {
    return '';
  }

  let filterArr = arr.filter(function(ele) {
    return typeof ele === 'string';
  });
  if (filterArr.length === 0) {
    return '';
  }

  return filterArr.reduce(function(acc, str) {
    if (acc.length > str.length) {
      return str;
    }
    return acc;
  });
}
