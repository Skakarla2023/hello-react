# State Management in React

- **state** in React refers to a special variable inside a component that can change over time and whenever it changes, the component re-renders to show the updated value.

```jsx

import {useState} from "react";

export default function Count() {
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(c=>c+1)}>+1</button>
        </div>
    );
}
```

- **State Management** in React refers to a system that manages how an app creates, updates, shares and persists state so thet the UI is always in sync with the latest data, and consistent even when the app grows big.
- It always make the UI reflect the data, no matter how big your app grows.

### Why do we need State Management

<img width="1276" height="235" alt="image" src="https://github.com/user-attachments/assets/0da8fc60-9ff3-46bf-921c-810dbd824a00" />


### Benefits/uses of State Management

<img width="1180" height="185" alt="image" src="https://github.com/user-attachments/assets/9a142346-ff9d-4412-b726-20c8302725c1" />
