function getLastElementOfProperty(obj, property) {
  let maybeArr = obj[property];
  if (Array.isArray(maybeArr)) {
    return maybeArr[maybeArr.length-1];
  }
}

// function getLastElementOfProperty(obj, property) {
//   if (Array.isArray(obj[property])) {
//     return obj[property][obj[property].length-1];
//   }
// }
