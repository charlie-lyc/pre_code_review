function printObject(obj) {
  let printedString = '';
  for (let key in obj) {
    printedString += key + ': ' + obj[key] + '\n';
  }
  return printedString;
}
