import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Clock extends Component {
  state = {
    date: new Date()
  };

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
    const { date } = this.state;
    const formatDate = `
    ${date.getFullYear()}-${date.getMonth() + 1}-${
      date.getDate() > 10 ? date.getDate() : "0" + date.getDate()
    } 
    ${weeks[date.getDay() - 1] + "요일"}
    ${date.toLocaleTimeString()}`;
    return (
      <h1 style={{ marginTop: "50px", textAlign: "center" }}>{formatDate}</h1>
    );
  }
}

export default Clock;
