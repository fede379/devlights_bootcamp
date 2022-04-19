import React, { Component } from "react";
import GreetingChild from "./GreetingChild";

class GreetingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "I'm Greeting Class",
      counter: 1,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState((prevState) => ({
      ...prevState,
      counter: prevState.counter + 1,
    }));
  }

  componentDidMount() {
    console.log("GreetingClass is mounted");
  }

  componentWillUnmount() {
    console.log("GreetingClass will unmount");
  }

  render() {
    return (
      <>
        <h1>Hi! {this.props.name ? `My name is ${this.props.name}` : ""}</h1>
        <h3>State:</h3>
        <code>{JSON.stringify(this.state, null, 2)}</code>
        <h3>Props:</h3>
        <code>{JSON.stringify(this.props, null, 2)}</code>
        <br />
        <p>counter: {this.state.counter}</p>
        <button onClick={this.onClick}>+1 counter</button>
        <GreetingChild />
      </>
    );
  }
}

export default GreetingClass;
