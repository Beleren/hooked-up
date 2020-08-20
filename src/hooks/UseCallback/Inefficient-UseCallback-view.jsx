import React, { useState } from 'react';

// Should render example once
const Example = ({ ben, onClick }) => {
  console.log('render Inefficient Example');
  return <button onClick={() => onClick(ben)}>{ben}</button>;
};

export default function InefficientUseCallbackView() {
  console.log('render Inefficient view');
  const [count, setCount] = useState(0);
  const inefficientHandleClick = (n = 1) => {
    setCount((c) => c + n);
  };
  const benNumbers = [3, 10, 20];
  return (
    <div>
      <h3>Without useCallback</h3>
      <p>{count}</p>
      {benNumbers.map((ben) => (
        <Example ben={ben} onClick={inefficientHandleClick} key={ben}></Example>
      ))}
    </div>
  );
}
