// 학생의 정보가 담긴 객체를 요소로 갖는 배열을 입력받아 아래 조건에 맞게 변형된 배열을 리턴해야 합니다.
// 남학생들의 정보는 리턴하는 배열에서 제외합니다.
// 'grades' 속성값은 평균값(number 타입)으로 바꿉니다.
function studentReports(students) {
  let femalesOnly = students.filter(function(student) {
    return student.gender === 'female';
  });
  let gradesToAverageOfFemales = femalesOnly.map(function(female) {
    let grades = female.grades;
    let total = grades.reduce(function(acc, val) {
      return acc + val;
    });
    female.grades = total / grades.length;
    return female;
  });
  return gradesToAverageOfFemales;
}

/* reduce(), filter(), map() 메소드는 callback 함수에 return 값이 정해져 있어야만 
  새로운 변수에 그 값들을 받을 수 있다.
*/