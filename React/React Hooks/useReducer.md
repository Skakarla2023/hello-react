# useReducer

- useReducer is a React Hook used to manage complex state logic in functional components.

- It is an alternative to useState when your state depends on multiple values or when the next state depends on the previous state.


<img width="1331" height="309" alt="image" src="https://github.com/user-attachments/assets/4f8de62f-0ad3-4b0e-b589-6e85e6c2fdcd" />

<img width="1215" height="281" alt="image" src="https://github.com/user-attachments/assets/d823629f-f84c-407e-a072-cc2211ce7c35" />

<img width="1275" height="259" alt="image" src="https://github.com/user-attachments/assets/e304ee2e-b1cf-406a-886f-2717dfa2c353" />

```tsx
import React, { useReducer } from "react";

// 1. Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  // 2. useReducer takes reducer and initial state
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

export default Counter;
```
