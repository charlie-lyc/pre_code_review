// 점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.

function convertScoreToGrade(score) {
  if (0 > score || score > 100) {
    return 'INVALID SCORE';
  } else if (90 <= score && score <= 100) {
    return 'A';
  } else if (80 <= score && score <= 89) {
    return 'B';
  } else if (70 <= score && score <= 79) {
    return 'C';
  } else if (60 <= score && score <= 69) {
    return 'D';
  }
  return 'F';
}
