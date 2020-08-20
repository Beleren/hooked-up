import React, { useMemo } from 'react';
import { useState } from 'react';

const computeExpensiveValue = (a, b) => {
  console.log('computing expensive value - should render once');
  return a + b;
};
export default function UseMemo() {
  console.log('rendering parent component');
  const [state, setState] = useState(0);
  return (
    <div>
      <span>parent value: {state}</span>
      <Hook number={0} />
      <button onClick={() => setState((state) => state + 1)}>Sum</button>
    </div>
  );
}

function Hook({ number }) {
  console.log('rendering child component');
  const memoizedVal = useMemo(() => computeExpensiveValue(number, 2), [number]);
  return <div>child value: {memoizedVal}</div>;
}
