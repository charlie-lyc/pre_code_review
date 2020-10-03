// 점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.

function convertScoreToGradeWithPlusAndMinus(score) {
  let share = Math.floor(score / 10);
  let remain = score % 10;

  let grade;
  if (0 > score || score > 100) {
    return 'INVALID SCORE';
  } else if (share === 10) {
    return 'A+';
  } else if (share === 9) {
    grade = 'A';
  } else if (share === 8) {
    grade = 'B';
  } else if (share === 7) {
    grade = 'C';
  } else if (share === 6) {
    grade = 'D';
  } else {
    return 'F';
  }

  let minusPlus;
  if (0 <= remain && remain <= 2) {
    minusPlus = '-';
  } else if (8 <= remain && remain <= 9) {
    minusPlus = '+';
  } else {
    minusPlus = '';
  }

  return grade + minusPlus;
}
