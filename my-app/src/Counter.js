import React, { Component } from "react";

class Counter extends Component {
  // 객체로 써야한다 !! state는 !!
  state = {
    number: 0
  };
  // 숫자를 증가, 감소 하는 핸들러 함수를 만든다

  handleIncreas = () => {
    // 업데이트(변화)가 필요한 것은 setState로 해준다.
    this.setState({
      number: this.state.number + 1
    });
  };
  handleDecreas = () => {
    // 업데이트(변화)가 필요한 것은 setState로 해준다.
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      //    여기 리턴에는 () 괄호가 붙는데 App.js return에는 괄호가 왜 없는 거죠??
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number} </div>
        <button onClick={this.handleIncreas}>+</button>
        <button onClick={this.handleDecreas}>-</button>
      </div>
    );
  }
}

export default Counter;
