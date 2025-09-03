# useContext

- useContext is a React Hook that lets you access data from a context anywhere in your component tree without passing props manually at every level.

👉 Before useContext, sharing data across multiple nested components required prop drilling — passing props through every intermediate component, which can be messy.

<img width="1333" height="569" alt="image" src="https://github.com/user-attachments/assets/12a8c1d2-3fa4-4825-8cec-941ac9f33b9e" />

<img width="1327" height="269" alt="image" src="https://github.com/user-attachments/assets/a810bf80-82ae-4f02-966b-5175af9fde59" />

<img width="1315" height="350" alt="image" src="https://github.com/user-attachments/assets/ac1ced0e-7d21-43cf-a948-9942a7db9922" />

<img width="1319" height="317" alt="image" src="https://github.com/user-attachments/assets/d29bd0fe-ed27-4eb9-aaee-59e35d254733" />

<img width="1311" height="429" alt="image" src="https://github.com/user-attachments/assets/6a17ace2-5a5e-4cbc-a4ab-43858600d1aa" />

<img width="1303" height="287" alt="image" src="https://github.com/user-attachments/assets/b7da9ae8-ebaf-4ee4-b158-483882667b7f" />

```jsx
import React from "react";
import {createContext, useContext} from "react";

// create a context
const ThemeContext = createContext();

function App() {
  return(
    <ThemeContext.Provider value="light">
      <Header />
      <Content />
    </ThemeContext.Provider>
  );
}

function Header() {
  //use context
  const theme = useContext(ThemeContext);
  return <h1>Header Theme: {theme}</h1>
}

function Content() {
  const theme = useContext(ThemeContext);
  return <p> Content Theme: {theme}</p>
}

export default App;
```

