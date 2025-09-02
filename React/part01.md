# ReactJS

- React is a JavaScript library used to build user interfaces (UI) — like websites and web apps.

- It helps you create things like buttons, forms, pages, dashboards in a faster and smarter way.

- Normally, updating parts of a webpage (like a button click showing new content) can be messy.

- React makes it easy by:

  - the UI into small pieces called components (like LEGO blocks 🧩).

  - Updating only the changed parts of the page, instead of reloading the whole thing.
 
## JSX 

- JSX stands for JavaScript XML.

- It lets you write HTML-like code inside JavaScript.

- JSX makes React code shorter and easier to read.

- You can use { } to put JavaScript expressions inside JSX.

```javascript
import React from "react";

function App() {
  const name = "Arohi";
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to React with JSX 🚀</p>
    </div>
  );
}

export default App;
```

## Components

- A component in React is a reusable, isolated piece of UI.

- Each component is a JavaScript function or class that returns a React element (usually written with JSX).

- Components follow the principle of composition (small components combine to form larger UIs).

###  Types of Components:

#### Functional components 

- Functional components are plain JavaScript functions that return JSX (React elements).

  - Example:
  ```jsx
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  ```
  - Features:
      - Simple syntax
      - Can use Hooks (like useState, useEffect) to add state and side effects.
      - Recommended for most modern React development

#### Class Components

1. A Class Component is an older way of writing components in React (before hooks).
2. It is written using the class keyword instead of a function.
3. It can have state (data that changes) and lifecycle methods (special functions that run at certain times, like when the component mounts).
4. Needs to use render() method to show UI.



## Props

  - Props = short for properties.

  - They are like inputs to a React component.
  
  - Props are read-only → a component cannot change the props it receives.
  
  - They allow us to reuse components with different data.
  
  - Think of props like arguments you pass to a function.


------------------------------------------------------------------------------------------------------------------------------------------------

### Component = the function itself that returns UI.

### State = a variable inside the component that can change over time.

### Props = arguments passed into the component from outside.

-----------------------------------------------------------------------------------------------------------------------------------------------

## Events

- Events are actions that happen in the browser, like clicks, typing, hovering, or form submissions.

- In React, you handle these events using event handlers — functions that run when the event occurs.

- React events are written in camelCase (not lowercase like HTML).

  - HTML → <button onclick="...">

  - React → <button onClick={...}>

- Event handlers are passed as functions, not strings.

```javascript
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

## Binding

- Binding connects a function to the correct this context.

- Binding = making sure this points to the correct component instance in class components.

- In functional components, binding is usually not needed because arrow functions and hooks handle it automatically.


-----------------------------------------------------------------------------------------------------

### Event = pressing a button.

### Handler function = the code that runs when the button is pressed.

### Binding = making sure the code knows which object it belongs to when it runs.

------------------------------------------------------------------------------------------------------


## Conditional Rendering

- Conditional Rendering means showing or hiding parts of the UI based on conditions.

- Think of it like an if-else statement but for React components or elements.

- It’s useful when you want to display different content depending on state, props, or any logic.

### (a) Using if statement

```javascript
function Greeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}
```

### (b) Using Ternary Operator (shorter)

```javascript
function Greeting(props) {
  return (
    <h1>{props.isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>
  );
}
```

### (c) Using Logical AND (&&) for simple conditions

```javascript
function Notification(props) {
  return (
    <div>
      {props.showMessage && <p>You have new notifications!</p>}
    </div>
  );
}
```

Here, <p> only shows if showMessage is true.

### You can render different components based on conditions:

```javascript
function App(props) {
  return <div>{props.isLoggedIn ? <Dashboard /> : <Login />}</div>;
}
```

Dashboard shows if logged in, else Login shows
