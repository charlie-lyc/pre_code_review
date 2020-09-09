// function isPythagorean(side1, side2, side3) {
//   if (side1 >= side2) {
//     if (side1 >= side3) {
//       if (side1*side1 === side2*side2 + side3*side3) {
//         return true;
//       }
//     } else {
//       if (side3**2 === side1**2 + side2**2) {
//         return true;
//       }
//     }
//   } else {
//     if (side2 >= side3) {
//       if (Math.pow(side2, 2) === Math.pow(side1, 2) + Math.pow(side3, 2)) {
//         return true;
//       }
//     } else {
//       if (side3**2 === side1**2 + side2**2) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function isPythagorean(side1, side2, side3) {
//   if (side1*side1 === side2*side2 + side3*side3) {
//     return true;
//   } else if (side3**2 === side1**2 + side2**2) {
//     return true;
//   } else if (Math.pow(side2, 2) === Math.pow(side1, 2) + Math.pow(side3, 2)) {
//     return true;
//   }
//   return false;
// }

function isPythagorean(side1, side2, side3) {
  if ((side1*side1 === side2*side2 + side3*side3) || (side3**2 === side1**2 + side2**2) || (Math.pow(side2, 2) === Math.pow(side1, 2) + Math.pow(side3, 2))) {
    return true;
  }
  return false;
}
