import React from 'react';
import MathJax from 'react-mathjax-preview';

export default function MathExpression({ expression }) {
  return (
    <div className="p-2 bg-white rounded shadow text-center my-2">
      <MathJax math={`f(x) = ${expression}`} />
    </div>
  );
}