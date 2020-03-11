import React, { useState, useCallback } from "react";

// Should render example once
const Example = React.memo(({ ben, onClick }) => {
  console.log("render Example");
return <button onClick={() => onClick(ben)}>{ben}</button>;
});

export default function UseCallbackview() {
  console.log("render UseCallback view");
  const [count, setCount] = useState(0);
  const handleClick = useCallback((n = 1) => {
    setCount(c => c + n);
  }, [setCount]);
  const benNumbers = [3, 10, 20];
  return (
    <div>
      <p>{count}</p>
      {benNumbers.map(ben => (
        <Example onClick={handleClick} ben={ben} key={ben} />
      ))}
    </div>
  );
}
