import React, { Component } from "react";

export default class Switcher extends Component {
  state = {
    color: "white",
  };

  setDart = () => {
    this.setState({ color: "black" });
  };

  setLight = () => {
    this.setState({ color: "white" });
  };

  render() {
    const { color } = this.state;
    return <div style={{ padding: "10px", backgroundColor: color, height: "400px" }}>
      <button onClick={this.setDart}>Dark</button>
      <button onClick={this.setLight}>Light</button>
    </div>;
  }
}
