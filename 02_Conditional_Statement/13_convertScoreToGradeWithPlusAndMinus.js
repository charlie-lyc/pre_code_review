// 점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.

function convertScoreToGradeWithPlusAndMinus(score) {
  let digitTen = Math.floor(score/10);
  let digitOne = score % 10;
  let gradeChar = '';
  let plusMinus = '';
  if (score === 100) {
    return 'A+';
  } else if (digitTen === 9) {
    gradeChar = 'A';
  } else if (digitTen === 8) {
    gradeChar = 'B';
  } else if (digitTen === 7) {
    gradeChar = 'C';
  } else if (digitTen === 6) {
    gradeChar =  'D';
  } else if (0 <= digitTen && digitTen <= 5) {
    return 'F';
  } else {
    return 'INVALID SCORE';
  }
  if (0 <= digitOne && digitOne <= 2) {
    plusMinus = '-';
  } else if (8 <= digitOne && digitOne <= 9) {
    plusMinus = '+';
  }
  return gradeChar + plusMinus;
}
