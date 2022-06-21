import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  state = {
    name: " ",
    fullName: " ",
  };
  key1 = (el) => {
    this.setState({
      name: el.target.value,
    });
  };
  key2 = (el) => {
    this.setState({
      fullName: el.target.value,
    });
  };
  render() {
    return (
      <div id="modal">
        <div className="half1">
          <div className="inputs">
            <input
              type="text"
              placeholder="Name"
              id="input1"
              onChange={this.key1}
            />
            <input
              type="text"
              placeholder="Fullname"
              id="input2"
              onChange={this.key2}
            />
            <input
              type="submit"
              value="Fullname"
              id="input3"
              onClick={this.submit}
            />
          </div>
        </div>
        <div className="half2">
          <h3 id="par">
            my name is {this.state.name} {this.state.fullName}
          </h3>
        </div>
      </div>
    );
  }
}

{
  /* <span id="nom"></span> <span id="fullnom"></span> */
}

export default Modal;
