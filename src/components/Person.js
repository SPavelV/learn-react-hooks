import React, { Component, useState } from "react";

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

  setPerson((person) => {
    return {
      firstName: "Mike",
      lastName: person.lastName,
    };
  });

  setPerson((person) => {
    return {
      ...person,
      firstname: "Jonh",
    };
  });
};
