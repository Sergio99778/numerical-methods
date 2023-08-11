function lagrangeInterpolation(x, y, x0) {
  let n = x.length;
  let y0 = 0;
  for (let i = 0; i < n; i++) {
    let p = 1;
    for (let j = 0; j < n; j++) {
      if (j != i) {
        p *= (x0 - x[j]) / (x[i] - x[j]);
        console.log(`(${x0} - ${x[j]}) / (${x[i]} - ${x[j]})`);
      }
    }
    y0 += p * y[i];
  }
  return y0;
}

// Example
let x = [1, 2, 3];
let y = [1.5709, 1.5727, 1.5751];
let x0 = 3.5;
let y0 = lagrangeInterpolation(x, y, x0);
console.log(y0); // 12.25
