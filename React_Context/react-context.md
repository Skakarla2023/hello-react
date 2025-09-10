<img width="1284" height="253" alt="image" src="https://github.com/user-attachments/assets/79d80571-7a30-450f-9b1b-40cd0bd2ab90" />

### 🔹 Why is it necessary?

Normally, in React:

- To share data from a parent component to a deeply nested child, you must pass it down through props at every step.

- This is called prop drilling, and it becomes messy when your app grows.

React Context removes this problem by:

- Providing data directly to any component that needs it.

- Skipping the unnecessary middle components.


### 🔹 How is it useful?

Context is useful for data that needs to be accessed by many components, such as:

- Theme (dark/light mode)

- User authentication info (logged in or not)

- Language/locale settings

- Shopping cart in an e-commerce app

Instead of passing these everywhere, Context makes them available globally.


### 🔹Benefits of React Context

1. Avoids prop drilling

2. Improves readability

3. Better scalability

4. Centralized state


### 🔹 Purpose of React Context

The main purpose is to:

1. **Simplify data sharing** across the app.

2. **Avoid repetitive code** of passing props.

3. **Make global state management easier** without needing external libraries (like Redux).


### 🔹 Challenges React Context Overcame

Before Context:

- Developers relied on prop drilling, which caused:

  - Code duplication

  - Confusing data flow

  - Harder debugging

- Managing app-wide settings (like user login info or themes) was painful.

Context solved this by:
##### ✅ Eliminating prop drilling
##### ✅ Making global data accessible in fewer steps
##### ✅ Improving maintainability of large apps
