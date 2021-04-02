import React, { Profiler } from "react";
import Demo from "./demo";

export default class ProfilerIndex extends React.Component {
  callback(e) {
    console.log("哈哈哈");
    console.log(e);
  }

  render() {
    return (
      <div>
        <Profiler id="test" onRender={this.callback}>
          <Demo />
        </Profiler>
      </div>
    );
  }
}
