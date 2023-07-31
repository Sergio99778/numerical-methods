function evaluarFuncion(func, x) {
  return func(x);
}

function newtonRaphson(f, df, x0, d, maxIter = 0) {
  let x = x0;
  let y = evaluarFuncion(f, x);
  let dy = evaluarFuncion(df, x);
  let max1 = maxIter || 100;
  let values = [];
  let err = Math.abs(y / dy);
  let k = 0;

  while (err > d && k < max1) {
    x = x - y / dy;
    y = evaluarFuncion(f, x);
    dy = evaluarFuncion(df, x);
    err = Math.abs(y / dy);
    k++;
    values.push({ k, x, y, dy, err });
  }

  console.table(values, ["k", "x", "y", "dy", "err"]);

  return { x, y, dy, err };
}

// Ejemplo de uso:
// Definir la función a analizar

function funcionEjemplo(x) {
  return 2 * Math.sin(x) - x;
}

function derivadaFuncionEjemplo(x) {
  return 2 * Math.cos(x) - 1;
}

let { x, y, dy, err } = newtonRaphson(
  funcionEjemplo,
  derivadaFuncionEjemplo,
  0.5,
  0.0001
);
