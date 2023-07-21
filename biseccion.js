function evaluarFuncion(func, x) {
  return func(x);
}

function biseccion(f, a, b, d, maxIter = 0) {
  let ya = evaluarFuncion(f, a);
  let yb = evaluarFuncion(f, b);

  if (ya * yb > 0) {
    throw new Error(
      "El método de la bisección no puede garantizar la convergencia con los puntos iniciales dados."
    );
  }

  let max1 =
    maxIter || 1 + Math.round((Math.log(b - a) - Math.log(d)) / Math.log(2));
  console.log("max1", max1);
  let c, yc, err;
  let values = [];

  for (let k = 1; k <= max1; k++) {
    c = (a + b) / 2;
    yc = evaluarFuncion(f, c);
    err = Math.abs(b - a);
    values.push({ k, a, b, c, ya, yb, yc, err });

    if (yc === 0) {
      a = c;
      b = c;
    } else if (yb * yc > 0) {
      b = c;
      yb = yc;
    } else {
      a = c;
      ya = yc;
    }
    // Almacenar los valores de cada iteración para imprimirlos en la tabla

    if (b - a < d) {
      console.log("BREAK");
      break;
    }
  }

  // Imprimir la tabla sin index
  console.table(values, ["k", "a", "b", "c", "ya", "yb", "yc", "err"]);

  c = (a + b) / 2;
  err = Math.abs(b - a);
  yc = evaluarFuncion(f, c);

  return { c, err, yc };
}

// Ejemplo de uso:
// Definir la función a analizar
function funcionEjemplo(x) {
  return x ** 3 - 3
}

// Definir los extremos izquierdo y derecho del intervalo [a, b]
const a = 1;
const b = 2;

// Definir el criterio de paro 'd' (por ejemplo, 0.001)
const d = 0.00001;

// Llamar a la función de la bisección y obtener el resultado
const resultado = biseccion(funcionEjemplo, a, b, d);
console.log(resultado);
