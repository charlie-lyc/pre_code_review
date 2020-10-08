// 객체를 입력받아 객체가 가진 age 속성값이 합법적으로 투표할 수 있는 나이(18세 이상)인지 여부를 리턴해야 합니다.

function isPersonOldEnoughToVote(person) {
  return person.age >= 18;
}

// function isPersonOldEnoughToVote(person) {
//   if (person.age >= 18) {
//     return true;
//   }
//   return false;
// }

/**
 * 객체의 key를 알고 있으면 for loop를 사용하지 않고 조회할 수 있다.
 */

// function isPersonOldEnoughToVote(person) {
//   for(let key in person) {
//     if(key === 'age' && person[key] >= 18) {
//       return true;
//     }
//   }
//   return false;
// }
