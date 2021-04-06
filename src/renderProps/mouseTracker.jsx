import React from "react";
import Mouse from "./mouse";

class Cat extends React.Component {
  render() {
    return <div>{this.props}</div>;
  }
}

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <Mouse render={(pos) => <Cat pos={pos} />} />
      </div>
    );
  }
}
