import React, { useState } from 'react';

export default function UseStateview() {
  console.log('UseStateView');
  const [count, setCount] = useState(0);
  const [character, setCharacter] = useState('a');
  return (
    <div>
      <h2>UseState Hook</h2>
      <div>
        <h3>Counter</h3>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <hr/>
      <div>
        <h3>Character</h3>
        <p>{character}</p>
        <div>
          <button onClick={() => setCharacter('a')}>a</button>
          <button onClick={() => setCharacter('b')}>b</button>
          <button onClick={() => setCharacter('c')}>c</button>
        </div>
      </div>
    </div>
  );
}
