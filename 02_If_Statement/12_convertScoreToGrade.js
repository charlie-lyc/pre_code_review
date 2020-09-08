function convertScoreToGrade(score) {
  if (90 <= score && score <= 100) {
    return 'A';
  } else if (80 <= score && score <= 89) {
    return 'B';
  } else if (70 <= score && score <= 79) {
    return 'C';
  } else if (60 <= score && score <= 69) {
    return 'D';
  } else if (0 <= score && score <= 59) {
    return 'F';
  } else {
    return 'INVALID SCORE';
  }
}
