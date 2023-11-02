function hermiteCubic(xl, yl, sl, xr, yr, sr) {
  // Función para calcular el interpolante cúbico de Hermite
  // Entrada:
  //  xl, yl, sl: punto del extremo izquierdo, su imagen y derivada
  //  xr, yr, sr: punto derecho, imagen y derivada
  // Salida:
  //  Retorna los coeficientes del polinomio

  const difx = xr - xl;
  const yp = (yr - yl) / difx;

  const a = yl;
  const b = sl;
  const c = -sl / difx;
  const d = 0;

  console.log(
    `H(x) = ${a} + ${b}(x-${xl}) + ${c}(x-${xl})^2 + ${d}(x-${xl})^2(x-${xr})`
  );
  return [a, b, c, d];
}

function hermitePolynomial(C, X) {
  return Y;
}

function makeArray(from, to, step) {
  const arr = [];
  for (var i = from; i <= to; i += step) {
    arr.push(i);
  }
  return arr;
}

hermiteCubic(
  -Math.PI,
  "1.5707-2.98i",
  0.06399129,
  Math.PI,
  "1.5707+2.98i",
  -0.06399129
);
