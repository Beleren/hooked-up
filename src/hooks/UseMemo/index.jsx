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
      <Hook number={state} />
    </div>
  );
}

function Hook({ number }) {
  console.log('rendering child component');
  let [result, setResult] = React.useState('Not yet calculated');

  useEffect(() => {
    setResult('Not yet calculated');
  }, [number]);

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
