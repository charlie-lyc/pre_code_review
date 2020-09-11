function extend(obj1, obj2) {
  for (let key1 in obj1) {
    for (let key2 in obj2) {
      if (!(key2 in obj1)) {
        obj1[key2] = obj2[key2];
      }
    }
  }
}
