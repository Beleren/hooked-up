import React, { useMemo, useState } from 'react';
import { useEffect } from 'react';

const SomeLongRunningApi = (arg) => {
  console.log('running looong api call');
  return new Promise((res) => {
    const resolve = () => {
      const random = Math.random();
      const mathComparison = random > arg;
      res(
        mathComparison
          ? { interestingProperty: 'so interesting number ' + random }
          : { interestingProperty: 'very interesting number ' + random }
      );
    };
    setTimeout(resolve, 2000);
  });
};

export default function UseMemo() {
  console.log('rendering parent component');
  const [state, setState] = useState(0);
  return (
    <div>
      <p>parent value: {state}</p>
      <button onClick={() => setState((state) => state + 1)}>
        Sum parent number
      </button>
      <UseMemoChild number={state} />
    </div>
  );
}

function UseMemoChild({ number }) {
  console.log('rendering child component');
  let [result, setResult] = React.useState('Not yet calculated');

  // Resetting state from an effect when a prop changes causes a cascading
  // render. Kept as-is because it is part of what this demo shows; the
  // idiomatic fix would be deriving `result` or keying the component.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResult('Not yet calculated');
  }, [number]);

  // An async callback makes useMemo memoize the *promise*, not the resolved
  // value — which is why `getResult` below has to await it. React's own lint
  // rule rejects this outright; it is preserved deliberately to demonstrate
  // the trap.
  // eslint-disable-next-line react-hooks/use-memo
  const myExpensiveResultObject = useMemo(async () => {
    const result = await SomeLongRunningApi(number);
    return result;
  }, [number]);

  const getResult = async () => {
    setResult('Not yet calculated');
    const result = await myExpensiveResultObject;
    setResult(result.interestingProperty);
  };

  return (
    <div>
      <p>child value: {result}</p>
      <button onClick={getResult}>Calculate child value</button>
    </div>
  );
}
