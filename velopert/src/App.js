import React, { Component } from "react";
import "./App.css";
import MyName from "./MyName";
import Counter from "./Counter";

class App extends Component {
  render() {
    const style = {
      textAlign: "center"
    };
    return (
      <div style={style}>
        <MyName name="리액트" />
        <Counter />
      </div>
    );
  }
}

export default App;
