import React, { useState } from "react";

const HookSwitcher = () => {
  const [color, setColor] = useState("white");
  const [fontSize, setFontSize] = useState(14);

  const setDark = () => setColor("gray");
  const setLight = () => setColor("white");
  const changeFontSize = () => setFontSize((state) => state + 2);

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: color,
        height: "400px",
        fontSize: `${fontSize}px`
      }}
      >
      <div>Some text</div>
      <button onClick={setDark}>Dark</button>
      <button onClick={setLight}>Light</button>
      <button onClick={changeFontSize}>+</button>
    </div>
  );
};

export default HookSwitcher;
