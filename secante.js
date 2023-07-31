function evaluarFuncion(func, x) {
  return func(x);
}

function secante(f, x0, x1, d, maxIter = 0) {
  let y0 = evaluarFuncion(f, x0);
  let y1 = evaluarFuncion(f, x1);
  let max1 = maxIter || 100;
  let values = [];
  let k = 0;

  while (k < max1) {
    let dx = (y1 * (x1 - x0)) / (y1 - y0);
    let x2 = x1 - dx;
    let y2 = evaluarFuncion(f, x2);
    let err = Math.abs(dx);

    values.push({ k, x0, x1, x2, y0, y1, y2, err });

    if (err < d) {
      console.log("Se cumple la condición de parada.");
      break;
    }

    x0 = x1;
    y0 = y1;
    x1 = x2;
    y1 = y2;
    k++;
  }

  console.table(values, ["k", "x0", "x1", "x2", "y0", "y1", "y2", "err"]);

  return { x: x1, y: y1, err: Math.abs(y1) };
}

// Ejemplo de uso:
// Definir la función a analizar
function funcionEjemplo(x) {
  return 2 * Math.sin(x) - x;
}

// Definir los extremos izquierdo y derecho del intervalo [a, b]
const x0 = 1;
const x1 = 2;

// Definir las tolerancias 'd' y 'e' (por ejemplo, 0.0001)
const d = 0.0001;

let { x, y, err } = secante(funcionEjemplo, x0, x1, d);
