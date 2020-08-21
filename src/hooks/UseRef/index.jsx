import React, { useRef, useEffect, useState } from 'react';

export default function UseRef() {
  const inputEl = useRef(null);
  const [count, setCount] = useState(99);
  const [isVisible, setisVisible] = useState(true);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <div>
      <h1>useRef</h1>
      <div>
        <h3>Using hook to reference a ReactNode</h3>
        <input ref={inputEl} type='text' />
        <button onClick={onButtonClick}>Focus the input</button>
      </div>
      <hr />
      <div>
        <h3>Using hook to store values between re-renders</h3>
        {isVisible && <RenderCounter parentCount={count} />}
        <button onClick={() => setCount((state) => state - 1)}>
          Decrement
        </button>
        <button onClick={() => setisVisible((visibility) => !visibility)}>
          Toggle visibility
        </button>
      </div>
    </div>
  );
}

const RenderCounter = ({ parentCount }) => {
  const counter = useRef(0);

  useEffect(() => {
    counter.current = counter.current + 1;
  });

  return (
    <p>{`The component has been re-rendered ${counter.current} times. Parent count is ${parentCount}`}</p>
  );
};
