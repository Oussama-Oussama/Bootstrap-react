import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    const { items } = this.props;
    const allItems = items.map((item) => {
      return (
        <div className="obj" key={Math.random() * 100}>
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.age}</p>
        </div>
      );
    });
    return (
      <div id="cont">
        {allItems}
        <div>{Math.random() * 100}</div>
      </div>
    );
  }
}

export default Item;
