// 객체를 요소로 갖는 배열과 문자열을 입력받아 각 요소의 'animal' 속성값이 문자열과 일치할 경우, 해당 요소의 'score' 속성값을 모두 더한 값을 리턴해야 합니다.
function calculateScore(records, value) {
  let newRecords = records.filter(function(record) {
    return record.animal === value;
  });
  let total = 0;
  newRecords.forEach(function(record) {
    total += record.score;
  });
  return total;
}

// function calculateScore(records, value) {
//   let newArr = [];
//   records.forEach(function(record) {
//     if (record.animal === value) {
//       newArr.push(record.score);
//     }
//   });
//   return newArr.reduce(function(acc, val) {
//     return acc + val;
//   }, 0);
// }
