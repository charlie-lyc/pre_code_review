function removeOddValues(obj) {
  for(let key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 1) {
      delete obj[key];
    }
  }
}
