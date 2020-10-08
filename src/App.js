import React from "react";
import HookSwitcher from "./components/HookSwitcher";

const MyContext = React.createContext();

function App() {
  return (
    <MyContext.Provider value="Hello World 123">
      <Child />
    </MyContext.Provider>
  );
}

const Child = () => {
  return (
    <MyContext.Consumer>
      {(value) => {
        return <p> {value} </p>;
      }}
    </MyContext.Consumer>
  );
};

export default App;
