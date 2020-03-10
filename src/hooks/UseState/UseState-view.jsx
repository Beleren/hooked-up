import React, { useState } from 'react'

export default function UseStateview() {
  console.log('UseStateView');
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
