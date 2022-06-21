import React, { Component } from "react";
import "./List.css";

class List extends Component {
  state = {
    counter: 0,
  };
  plus = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div id="list">
        <p>{this.state.counter}</p>
        <button id="btn" onClick={this.plus}>
          Click on me
        </button>
      </div>
    );
  }
}

export default List;
