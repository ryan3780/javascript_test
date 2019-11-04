import React, { Component } from "react";
import Students from "./Students";
import Clock from "./Clock";

class App extends Component {
  render() {
    return (
      <div>
        <Students />
        <div>
          <Clock />
        </div>
      </div>
    );
  }
}
export default App;
