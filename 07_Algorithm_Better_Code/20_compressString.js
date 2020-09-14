function compressString(str) {
  if (str.length === 0) {
    return '';
  }
  let compressedStr = '';
  // 문자열 전체를 순회하는 outer loop
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    // 문자열 내에서 문자의 반복 횟수를 구하기 위한 inner loop
    for (let j = i; j < str.length - 1; j++) {
      if (str[j] === str[j+1]) {
        count++;
        i++;
      } else if (str[j] !== str[j+1]) {
        break;
      }
    }
    // 반복 횟수에 따른 문자 처리
    if (count >= 3) {
      compressedStr += String(count) + str[i];
    } else if (count === 2) {
      compressedStr += str[i] + str[i];
    } else {
      compressedStr += str[i];
    }
  }
  return compressedStr;
}


/*
  JavaScript :
  3 * 'a' => NaN
  3 + 'a' => '3a'

  Python :
  3 * 'a' => 'aaa'
  3 + 'a' => TypeError: unsupported operand type(s) for +: 'int' and 'str'
*/
