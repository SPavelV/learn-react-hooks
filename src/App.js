import React, { useContext } from "react";
import HookSwitcher from "./components/HookSwitcher";
import { Counter } from "./components/Counter";

const MyContext = React.createContext();

function App() {
  return <Counter />;
}

const Child = () => {
  const value = useContext(MyContext);
  return <p>{value}</p>;
};

export default App;
