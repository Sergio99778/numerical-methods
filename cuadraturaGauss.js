function cuadraturaGauss(x_i, w_i, f) {
  let sum = 0;
  for (let i = 0; i < x_i.length; i++) {
    console.log(`${w_i[i]} * ${f(x_i[i])}`);
    sum += w_i[i] * f(x_i[i]);
  }
  return sum;
}

const x_i = [-0.5773502691896257, 0.5773502691896257];
const w_i = [1, 1];
const f = (x) => 4 * x ** 3 + 9 * x ** 2 + 2 * x + 2;

console.log(cuadraturaGauss(x_i, w_i, f));
