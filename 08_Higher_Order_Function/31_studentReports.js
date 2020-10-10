// 학생의 정보가 담긴 객체를 요소로 갖는 배열을 입력받아 아래 조건에 맞게 변형된 배열을 리턴해야 합니다.
// 남학생들의 정보는 리턴하는 배열에서 제외합니다.
// 'grades' 속성값은 평균값(number 타입)으로 바꿉니다.
// arr[i]는 'name', 'gender' 등의 속성을 갖는 객체
// 'grades' 속성은 number 타입을 요소로 갖는 배열
// 'grades' 속성이 빈 배열인 경우는 없다고 가정합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 배열로 되어 있는 학생들의 성적을 number 타입의 평균값으로 변형해야 합니다.

function studentReports(students) {
  let onlyFemaleStudents = students.filter(function(student) {
    return student.gender === 'female';
  });

  return onlyFemaleStudents.map(function(student) {
    let sumOfGrades = student.grades.reduce(function(acc, grade) {
      return acc + grade;
    });
    student.grades = sumOfGrades / student.grades.length;
    return student;
  });
}
