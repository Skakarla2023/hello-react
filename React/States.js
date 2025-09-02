import React, { useState } from "react";

export default function Counter() {
  // Declare a state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* When button is clicked, update the state */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
