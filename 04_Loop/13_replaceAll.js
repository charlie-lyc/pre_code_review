// 문자열과 두 개의 문자(from, to)를 입력받아, 문자열에 등장하는 특정 문자(from)가 다른 문자(to)로 바뀐 문자열을 리턴해야 합니다.

function replaceAll(str, from, to) {
  let arrayOfStr = str.split('');
  for (let i = 0; i < arrayOfStr.length; i++) {
    if (arrayOfStr[i] === from) {
      arrayOfStr[i] = to;
    }
  }
  return arrayOfStr.join('');
}

// function replaceAll(str, from, to) {
//   let result = '';
//   for (let i = 0; i < str.length; i ++) {
//     if (str[i] === from) {
//       result = result.concat(to);
//     } else {
//       result = result.concat(str[i]);
//     }
//   }
//   return result;
// }

/** "split()" String <=> Array "join()"
 * split(<option>)에서 <option>의 default값은 없다.
 * 즉, 문자열을 각 문자별로 나누어 하나의 배열을 만들고 싶으면 split('')라고 코딩하면 된다.
 * join(<option>)에서 <option>의 default값은 ','이다.
 * 즉, 배열을 그냥 join()하면 각 문자 사이에 ','가 추가된다.
 */
