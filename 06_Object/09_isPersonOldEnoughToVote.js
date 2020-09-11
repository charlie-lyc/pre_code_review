function isPersonOldEnoughToVote(person) {
  if (person.age >= 18) {
    return true;
  }
  return false;
}

// function isPersonOldEnoughToVote(person) {
//   for(let key in person) {
//     if(key === 'age' && person[key] >= 18) {
//       return true;
//     }
//   }
//   return false;
// }
