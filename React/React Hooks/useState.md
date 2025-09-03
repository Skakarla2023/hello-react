# useState

- useState is a React Hook that lets you add state (data that changes over time) to functional components.

👉 Before hooks, only class components could have state. Functional components were “stateless.”
useState solved this limitation.

## 🔹 Purpose of useState

1. To make functional components interactive

2. To manage dynamic data that changes over time

3. To re-render the component whenever the state updates

> “We use useState instead of a normal variable because React automatically re-renders the component when state changes, but normal variables don’t trigger re-renders.”


```jsx
import React from "react";
import {useState} from "react";

function MyFunction() {
  const [count,setCount] = useState(0);
  // state variable:count
  // we are initializing the value of count to 0 using useState
  // it updates the count value and re-renders the component each time the state is updated

  return(
    <div>
      <p>{count}</p>
      <button onClick={() =>setCount(count+1)}>Increase</button>
    </div>
  );
}

export default MyFunction;
```


### 🔹 Why is it used?

We use useState when we want a component to remember values across re-renders.

#### Example:

Counter value

Form input text

Toggle button (on/off)

API data storage

```
Without state, the UI would never update based on user actions.
```






### 🔹 Benefits of useState

##### ✅ Makes functional components stateful (no need for class components)
##### ✅ Cleaner and simpler than this.state in classes
##### ✅ Can handle any data type (string, number, object, array)
##### ✅ Works with multiple state variables in one component
##### ✅ Encourages separation of concerns (manage each piece of state independently)
##### ✅ Supports lazy initialization (optimizing expensive operations)





<img width="1522" height="550" alt="image" src="https://github.com/user-attachments/assets/61bfae16-bf4b-495f-8b1b-5a4a07a43896" />

<img width="1527" height="560" alt="image" src="https://github.com/user-attachments/assets/802204ff-9cda-4b1e-b70c-e2fc4d7d39c7" />

<img width="1519" height="252" alt="image" src="https://github.com/user-attachments/assets/ab6516ab-4e14-4539-987e-a949414e2fad" />
