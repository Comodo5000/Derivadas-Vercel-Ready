import React from 'react';

export default function SliderControl({ value, onChange }) {
  return (
    <div className="flex flex-col items-center my-4">
      <label className="mb-2">Punto de evaluación: x = {value}</label>
      <input
        type="range"
        min="-10"
        max="10"
        step="0.1"
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="w-3/4"
      />
    </div>
  );
}