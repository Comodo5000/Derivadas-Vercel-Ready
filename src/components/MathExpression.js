import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

export default function MathExpression({ expression }) {
  return (
    <MathJaxContext config={{ loader: { load: ["input/asciimath", "output/chtml"] } }}>
      <div className="p-2 bg-white rounded shadow text-center my-2">
        <MathJax>{`\\( ${expression} \\)`}</MathJax>
      </div>
    </MathJaxContext>
  );
}
