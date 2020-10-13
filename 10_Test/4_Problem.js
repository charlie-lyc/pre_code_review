// 사원들의 정보를 배열로 입력받아 HTML 엘리먼트의 형태로 변형해서 ul#container에 append 합니다.
// 객체를 요소로 갖는 배열
// arr[i]는 'firstName', 'lastName', 'age', 'role' 등의 속성을 갖는 객체
// 'firstName', 'lastName', 'role' 등의 속성은 string 타입
// 'age' 속성은 number 타입 (1 이상의 정수)
// 별도의 리턴문(return statement)을 작성하지 않습니다.
// <a> 요소로 만들어진 사원의 이름을 클릭할 경우, 제공되는 printRole 함수가 실행되어 해당 사원의 role이 콘솔에 출력되어야 합니다.

function printRole(user) {
  // Joe Blow를 클릭하면 clerk 이
  // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
  // 이 함수는 수정하지 마십시오.
  console.log(user.role);
}

function test4(arr) {
  const container = document.querySelector('#container');
  for (let i = 0; i < arr.length; i ++) {

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'name';
    a.textContent = arr[i].firstName + ' ' + arr[i].lastName;
    a.onclick = function() {
      printRole(arr[i]);
    };

    const div = document.createElement('div');
    div.className = 'age';
    div.textContent = arr[i].age;

    li.append(a, div);
    container.append(li);
  }
}
