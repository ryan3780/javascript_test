import React, { Component } from "react";
import { Button } from "reactstrap";

class AddStudent extends Component {
  //부모의 state와 같은 형식일 필요는 없고, 데이터를 넘길때만 같은 형식으로 넘기면 되는건가?
  state = {
    name: "",
    english: "",
    history: "",
    math: ""
  };

  handleChange = e => {
    console.log(e.target.name);
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  //콘솔에서는 key:value가 이상하게 찍히는데, 데이터는 제대로 나오는건 왜그런거지???
  // 필요 없는 건 버리는건가?
  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate({
      ...this.state,
      score: {
        english: parseInt(this.state.english),
        history: parseInt(this.state.history),
        math: parseInt(this.state.math)
      }
    });
    this.setState({
      name: "",
      english: "",
      history: "",
      math: ""
    });
  };
  render() {
    const input = {
      width: "90px",
      height: "30px",
      boder: "1px solid black",
      marginRight: "25px",
      textAlign: "center"
    };
    return (
      <form onSubmit={this.handleSubmit} style={{ marginLeft: "170px" }}>
        <input
          style={{ marginRight: "140px", textAlign: "center" }}
          name="name"
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          style={input}
          name="english"
          placeholder="영어성적"
          value={this.state.english}
          onChange={this.handleChange}
        />
        <input
          style={input}
          name="history"
          placeholder="역사성적"
          value={this.state.history}
          onChange={this.handleChange}
        />
        <input
          style={input}
          name="math"
          placeholder="수학성적"
          value={this.state.math}
          onChange={this.handleChange}
        />
        <Button color="success" type="submit" style={{ marginLeft: "40px" }}>
          등록
        </Button>
        <div>
          {this.state.name}
          {this.state.english}
          {this.state.history}
          {this.state.math}
        </div>
      </form>
    );
  }
}

export default AddStudent;
