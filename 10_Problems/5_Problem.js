// 사람들의 정보를 담은 배열을 입력받아 조건에 맞게 각 개인의 전체 이름을 요소로 갖는 배열을 리턴해야 합니다.
// 배열을 요소로 갖는 배열
// arr[i]는 한 개인에 대한 정보를 담고 있는 배열
// arr[i]는 string 또는 number 타입을 요소로 갖는 배열
// arr[i]의 길이는 2
// string 타입을 요소로 갖는 배열을 리턴해야 합니다.
// 각 요소는 개인의 전체 이름은 이름(firstName)과 성(lastName) 사이에 공백을 표기합니다.
// 사람들의 전체 이름은 각 개인의 나이순(오름차순)으로 정렬되어야 합니다.
// 이름과 성이 하나만 있는 경우, 하나만 표기합니다.
// 이름과 성이 모두 없는 경우는 없다고 가정합니다.
// 사람들의 나이는 18 이상 120 이하의 자연수입니다.
// 사람들의 나이는 전부 다르다고 가정합니다.

function test5(arr) {
  const persons = [];
  for (let i = 0; i < arr.length; i ++) {
    let person = arr[i].reduce(function(acc, keyVal) {
      acc[keyVal[0]] = keyVal[1];
      return acc;
    }, {});
    persons.push(person);
  }

  const personsSortByAge = persons.sort(function(a, b) {
    if (a.age < b.age) {
      return -1;
    } else if (a.age > b.age) {
      return 1;
    }
  });

  return personsSortByAge.map(function(person) {
    if (person.firstName && person.lastName) {
      return person.firstName + ' ' + person.lastName;
    } else if (person.firstName && !person.lastName) {
      return person.firstName;
    } else if (!person.firstName && person.lastName) {
      return person.lastName;
    }
  });
}
