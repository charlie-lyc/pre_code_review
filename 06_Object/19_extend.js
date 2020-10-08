// 두 개의 객체를 입력받아 두번째 객체의 속성들을 첫번째 객체에 추가해야 합니다.
// 추가하려는 속성이 이미 첫번째 객체에 존재하는 경우, 기존 값을 그대로 둡니다.

function extend(obj1, obj2) {
  for (let key in obj2) {
    if (!(key in obj1)) {
      obj1[key] = obj2[key];
    }
  }
}

/**
 * key 값을 알수 없는 객체를 조회하고자 할 때 for loop를 사용하고,
 * 객체에 속성을 추가하고자 할 때는 for loop를 사용해 순회할 필요가 없다.
 * 그냥 bracket notation 혹은 dot notation을 이용해 할당만 하면 된다.
 * ex) obj1[key] = obj2[key]
 *     obj.keyName = obj2.keyName
 */

// function extend(obj1, obj2) {
//   for (let key1 in obj1) {
//     for (let key2 in obj2) {
//       if (!(key2 in obj1)) {
//         obj1[key2] = obj2[key2];
//       }
//     }
//   }
// }
