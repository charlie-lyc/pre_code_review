function getAllButLastElementOfProperty(obj, key) {
  let maybeArr = obj[key];
  if (key in obj && Array.isArray(maybeArr)) {
    return maybeArr.slice(0, maybeArr.length - 1);
  }
  return [];
}
