import React, { useState } from "react";

const HookSwitcher = () => {
  const [color, setColor] = useState("white");

  const setDark = () => setColor("black");
  const setLight = () => setColor("white");

  return (
    <div style={{ padding: "10px", backgroundColor: color, height: "400px" }}>
      <button onClick={setDark}>Dark</button>
      <button onClick={setLight}>Light</button>
    </div>
  );
};

export default HookSwitcher;
