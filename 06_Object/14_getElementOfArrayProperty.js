function getElementOfArrayProperty(obj, key, index) {
  let maybeArr = obj[key];
  if (Array.isArray(maybeArr)) {
    return maybeArr[index];
  }
}


// function getElementOfArrayProperty(obj, key, index) {
//   let maybeArr = obj[key];
//   for (let key in obj) {
//     if (Array.isArray(maybeArr)) {
//       return maybeArr[index];
//     }
//   }
// }


// function getElementOfArrayProperty(obj, key, index) {
//   for (let key in obj) {
//     if (Array.isArray(obj[key])) {
//       return obj[key][index];
//     }
//   }
// }
