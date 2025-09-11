# React Hooks

- React Hooks are special functions introduced in React 16.8 that let you use state and other React features in functional components (without writing class components).

### Purpose of React

1. Hooks let functional components use state and side effects (like fetching data).

2. They help make code cleaner and more reusable.

3. Developers can create custom hooks to share logic across components.

4. They remove the need for class components, constructors, and lifecycle methods.

5. Hooks make React apps more modular, flexible, and easier to maintain.

### 🔹 Types of Commonly Used Hooks

#### 1. State Management Hooks

useState() → For declaring state in a functional component.

Example:

```jsx
const [count, setCount] = useState(0);
```

#### 2. Side-Effect Hooks

useEffect() → For running side effects (like API calls, subscriptions, DOM updates).

Example:

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

#### 3. Context Hook

useContext() → For using values from React Context without writing Consumer.

#### 4. Reducer Hook

useReducer() → For managing complex state logic (like Redux style reducers).

#### 5. Ref Hook

useRef() → For accessing/managing DOM elements or persisting values across renders without re-rendering.

#### 6. Memoization Hooks

useMemo() → Optimizes performance by memoizing expensive calculations.

useCallback() → Memoizes functions so they don’t get re-created unnecessarily.

