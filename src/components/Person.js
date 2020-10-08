import React, { Component } from "react";

export default class Person extends Component {
  state = {
    firstname: "Bob",
    lastName: "Smith",
  };

  updateFristName() {
    this.setState({ firstname: "Mike" }); // в новом состоянии будет новое свойство firstName: "Mike", lastName останется прежним "Smith"
  }

  render() {
    return (
      <div>
        {this.state.firstname} {this.state.lastName}
      </div>
    );
  }
}

const PersonHook = () => {
  const [person, setPerson] = useState({
    firstName: "Bob",
    lastName: "Smith",
  });

  setPerson({ firstname: "Mike" }); // в новом состоянии будет только одно свойстов firstName: "Mike"
};
