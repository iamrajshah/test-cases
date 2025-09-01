import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="demo">Demo</h1>
      <h1 data-testid="count">{count}</h1>
      <button data-testid="increment" onClick={() => setCount(count + 1)}>Increment</button>
      <button data-testid="decrement" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
