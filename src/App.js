import React, { useState } from 'react';
import FunctionPlot from './components/FunctionPlot';
import SliderControl from './components/SliderControl';
import MathExpression from './components/MathExpression';
import { getDerivative, evaluateFunction } from './utils/calculus';

export default function App() {
  const [expr, setExpr] = useState('x^2');
  const [pointX, setPointX] = useState(1);
  const derived = getDerivative(expr);
  const func = x => evaluateFunction(expr, x);
  const deriv = x => evaluateFunction(derived, x);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">Visualizador de Derivadas</h1>
      <div className="text-center mb-4">
        <input
          type="text"
          value={expr}
          onChange={e => setExpr(e.target.value)}
          placeholder="Ej. sin(x), x^3, e^x"
          className="border p-2 rounded w-2/3"
        />
      </div>
      <MathExpression expression={expr} />
      <MathExpression expression={`\\frac{d}{dx}[${expr}] = ${derived}`} />
      <SliderControl value={pointX} onChange={setPointX} />
      <FunctionPlot func={func} deriv={deriv} pointX={pointX} />
    </div>
  );
}