# useEffect

- useEffect is a React Hook that lets you run side effects in your components.

- 👉 Side effects are actions that happen outside React’s rendering process, like:

  - Fetching data from an API
  
  - Updating the DOM directly
  
  - Setting up timers (intervals, timeouts)
  
  - Subscribing/unsubscribing to events
 
### 🔹 Purpose of useEffect

- The purpose of useEffect is to let you perform side effects in a clean, predictable way after the component renders.

Example:

1. Fetch data when a component loads

2. Update document title when a state changes

3. Clean up timers or event listeners


### 🔹 Best Way to Use useEffect

1. Always declare useEffect inside the component.

2. Use the dependency array ([]) to control when it runs.

3. Return a cleanup function if you set up something that needs removing (like event listeners).


<img width="1529" height="600" alt="image" src="https://github.com/user-attachments/assets/31019098-c208-428f-a2a5-2bdee778b2a2" />

<img width="1522" height="274" alt="image" src="https://github.com/user-attachments/assets/6f8e849d-8557-45e7-87be-addd8c1e4072" />

<img width="1515" height="416" alt="image" src="https://github.com/user-attachments/assets/86ae6dc8-e8f4-49b3-b081-19923a8014da" />


#### 🔹 What is the dependency array?

> It is the second argument you pass to useEffect.

> It tells React when to run the effect.


```jsx
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  // Run effect when component mounts
  useEffect(() => {
    console.log("Component mounted");

    // Start timer
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup when component unmounts
    return () => {
      console.log("Component unmounted, clearing timer");
      clearInterval(interval);
    };
  }, []); // runs once

  return <h2>⏱ Timer: {seconds}s</h2>;
}

export default Timer;
```

