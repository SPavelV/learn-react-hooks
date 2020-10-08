import React, { useState, useEffect, Component } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((v) => v + 1)}>+</button>

        <button onClick={() => setVisible(false)}>hide</button>

        <Notification />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>;
  }
};

class ClassCounter extends Component {
  componentDidMount() {
    console.log("class mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("class update");
  }

  componentWillUnmount() {
    console.log("class unmount");
  }

  render() {
    return <p>{this.props.value}</p>;
  }
}

const HookCounter = ({ value }) => {
  useEffect(() => console.log("mount"), []); // вызывается только при создании компонента один раз - аналог componentDidMount
  useEffect(() => console.log("update")); // вызывается каждый раз при обновлении компонента
  useEffect(() => () => console.log("unmount"), []); // вызывается при размонтировании компонента

  // effect + cleanup (mount + unmount)
  useEffect(() => {
    console.log("mount");
    return () => console.log("unmount");
  }, []);

  return <p>{value}</p>;
};

export const Notification = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return <div>{visible && <p>Hello</p>}</div>;
};