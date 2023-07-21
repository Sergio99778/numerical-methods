function evaluarFuncion(func, x) {
  return func(x);
}

function reglaFalsa(f, a, b, d = 0.0001, e = 0.0001, m = 1000) {
  let ya = evaluarFuncion(f, a);
  let yb = evaluarFuncion(f, b);
  let values = [];

  if (ya * yb > 0) {
    throw new Error(
      "No cumple las condiciones. El producto f(a)*f(b) es mayor que cero."
    );
  }

  for (let k = 1; k <= m; k++) {
    let dx = (yb * (b - a)) / (yb - ya);
    const c = b - dx;
    const ac = c - a;
    const yc = evaluarFuncion(f, c);

    values.push({ k, a, b, ya, yb, c, yc });

    if (yc === 0) {
      return { c, err: 0, yc };
    } else if (yb * yc > 0) {
      b = c;
      yb = yc;
    } else {
      a = c;
      ya = yc;
    }

    dx = Math.min(Math.abs(dx), Math.abs(ac));

    if (Math.abs(dx) < d || Math.abs(yc) < e) {
      console.log("Se cumple la condición de parada.");
      break;
    }
  }

  console.table(values);

  const c = (a + b) / 2;
  const err = Math.abs(b - a) / 2;
  const yc = evaluarFuncion(f, c);

  return { c, err, yc };
}

// Definir la función a analizar
function funcionEjemplo(x) {
  return x **3 -3
}

// Definir los extremos izquierdo y derecho del intervalo [a, b]
const a = 1;
const b = 2;

// Definir las tolerancias 'd' y 'e' (por ejemplo, 0.0001)
const d = 0.0001;
const e = 0.0001;

// Llamar a la función de la regla falsa y obtener el resultado
const resultado = reglaFalsa(funcionEjemplo, a, b, d, e);
console.log(resultado);
