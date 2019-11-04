import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log(this.state.date);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      date: new Date()
    });
  };

  render() {
    const weeks = ["월", "화", "수", "목", "금", "토", "일"];
    return (
      <h1>
        {this.state.date.getFullYear()}.&nbsp;
        {this.state.date.getMonth() + 1}.&nbsp;
        {this.state.date.getDate()}&nbsp;
        {weeks[this.state.date.getDay() - 1] + "요일"}&nbsp;
        {this.state.date.toLocaleTimeString()}
      </h1>
    );
  }
}

//https://beomy.tistory.com/27 질문하기 componentWillUnmount하는 이유?
export default Clock;
