import React from 'react';
import Plot from 'react-plotly.js';

export default function FunctionPlot({ func, deriv, pointX }) {
  const xValues = Array.from({ length: 201 }, (_, i) => -10 + i * 0.1);
  const yValues = xValues.map(func);
  const dyValues = xValues.map(deriv);
  const tangentY = xValues.map(x => {
    const m = deriv(pointX);
    const y0 = func(pointX);
    return m * (x - pointX) + y0;
  });

  return (
    <Plot
      data={[
        { x: xValues, y: yValues, type: 'scatter', mode: 'lines', name: 'f(x)' },
        { x: xValues, y: dyValues, type: 'scatter', mode: 'lines', name: "f'(x)" },
        { x: xValues, y: tangentY, type: 'scatter', mode: 'lines', name: 'Tangente', line: { dash: 'dot' } }
      ]}
      layout={{
        width: 700,
        height: 500,
        title: 'Gráfica de la función y su derivada',
        xaxis: { title: 'x' },
        yaxis: { title: 'y' }
      }}
    />
  );
}