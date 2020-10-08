import React, { useContext } from "react";
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
  const value = useContext(MyContext);
  return <p>{value}</p>;
};

export default App;
