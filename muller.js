function f(x) {
  return Math.pow(x, 3) - 13 * x * x - 12;
}
function muller(p0, p1, p3) {
  let i;
  let res;
  let values = [];

  for (i = 0; ; ++i) {
    let f1 = f(p0);
    let f2 = f(p1);
    let f3 = f(p3);

    let d1 = f1 - f3;
    let d2 = f2 - f3;

    let h1 = p0 - p3;
    let h2 = p1 - p3;

    let a0 = f3;
    let a1 =
      (d2 * Math.pow(h1, 2) - d1 * Math.pow(h2, 2)) / (h1 * h2 * (h1 - h2));
    let a2 = (d1 * h2 - d2 * h1) / (h1 * h2 * (h1 - h2));

    let x = (-2 * a0) / (a1 + Math.abs(Math.sqrt(a1 * a1 - 4 * a0 * a2)));
    let y = (-2 * a0) / (a1 - Math.abs(Math.sqrt(a1 * a1 - 4 * a0 * a2)));

    if (x >= y) res = x + p3;
    else res = y + p3;

    let m = res * 100;
    let n = p3 * 100;
    m = Math.floor(m);
    n = Math.floor(n);
    if (m == n) break;
    p0 = p1;
    p1 = p3;
    p3 = res;
    if (i > 100) {
      console.log("La raíz no se puede encontrar con el metodo de Muller");
      break;
    }
    values.push({ i, p0, p1, p3, res });
  }
  if (i <= 100) {
    console.log("El valor de la raiz es:  " + res.toFixed(4));
    console.table(values, ["i", "p0", "p1", "p3", "res"]);
  }
}
const p0 = 4.5;
const p1 = 5.5;
const p2 = 5;

muller(p0, p1, p2);
