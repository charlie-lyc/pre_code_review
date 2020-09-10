function fibonacci(num) {
  let fibo = [];
  for (let i = 0; i < num+1; i++) {
    if (i === 0) {
      fibo.push(0);
    } else if (i === 1) {
      fibo.push(1);
    } else {
      fibo.push(fibo[i-2] + fibo[i-1]);
    }
  }
  return fibo;
}
