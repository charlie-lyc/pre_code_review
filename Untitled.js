let obj = [1, 'false', false];
let res = [];
let result = `[${res}]`
for (let i = 0; i < obj.length; i ++) {
  if (typeof obj[i] === 'string') {
    res.push('"' + obj[i] + '"')
  } else {
    res.push(obj[i]);
  }
}
return result;
