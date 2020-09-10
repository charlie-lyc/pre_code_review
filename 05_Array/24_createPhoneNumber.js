function createPhoneNumber(arr) {
  let phoneNumber = '';
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 8) {
    phoneNumber += '(010)' + arr.slice(0, 4).join('') + '-' + arr.slice(4).join('');
  } else {
    phoneNumber += '(' + arr.slice(0, 3).join('') + ')' + arr.slice(3, 7).join('') + '-' + arr.slice(7).join('');
  }
  return phoneNumber;
}
