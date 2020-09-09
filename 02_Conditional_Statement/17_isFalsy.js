function isFalsy(anything) {
  if (!anything) {
    return true;
  }
  return false;
}

/* Falsy */
// 0. false
// 1. 0, -1
// 2. 'true', 'false', '0', '1', '-1'
// 3. ''
// 4. null
// 5. undefined
// 6. NaN
// ...
// 7. Infinity
// 8. -Infinity
