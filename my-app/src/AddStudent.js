import React, { Component } from "react";
import { Button } from "reactstrap";

class AddStudent extends Component {
  state = {
    name: "",
    score: {
      english: "",
      history: "",
      math: ""
    }
  };
  handleChange = e => {
    console.log(e.target.name);
    const { name, value } = e.target;
    this.setState({
      name: value,
      score: { [name]: value }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      score: {
        english: "",
        history: "",
        math: ""
      }
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="english"
          placeholder="영어성적"
          value={this.state.score.english}
          onChange={this.handleChange}
        />
        <input
          name="history"
          placeholder="역사성적"
          value={this.state.score.history}
          onChange={this.handleChange}
        />
        <input
          name="math"
          placeholder="수학성적"
          value={this.state.score.math}
          onChange={this.handleChange}
        />
        <Button type="submit">등록</Button>
        <div>
          {this.state.name}
          {this.state.score.english}
          {this.state.score.history}
          {this.state.score.math}
        </div>
      </form>
    );
  }
}

export default AddStudent;
