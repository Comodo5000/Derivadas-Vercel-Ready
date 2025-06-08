import { derivative, evaluate } from 'mathjs';

export function getDerivative(expr) {
  try {
    return derivative(expr, 'x').toString();
  } catch {
    return 'Error';
  }
}

export function evaluateFunction(expr, x) {
  try {
    return evaluate(expr, { x });
  } catch {
    return NaN;
  }
}