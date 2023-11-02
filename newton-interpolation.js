function newton(X, Y) {
  const n = X.length;
  const D = new Array(n).fill(null).map(() => new Array(n).fill(0)); // n x n matrix of zeros

  for (let i = 0; i < n; i++) {
    D[i][0] = Y[i]; // first column is Y transposed
  }

  // fill the divided differences matrix incrementally
  for (let j = 1; j < n; j++) {
    for (let k = j; k < n; k++) {
      D[k][j] = (D[k][j - 1] - D[k - 1][j - 1]) / (X[k] - X[k - j]);
    }
  }

  // calculate the interpolating coefficients
  let C = [D[n - 1][n - 1]]; // initialize with the last divided difference

  for (let k = n - 2; k >= 0; k--) {
    const polyX = [-X[k], 1];
    C = convolve(C, polyX);
    const m = C.length;
    C[m - 1] += D[k][k];
  }

  return [C, ...D];
}

function convolve(A, B) {
  const result = new Array(A.length + B.length - 1).fill(0);

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      result[i + j] += A[i] * B[j];
    }
  }

  return result;
}
// Example
const X = [-1, 1, 2, 3];
const Y = [2, 1, 2, -2];
console.table(newton(X, Y));
