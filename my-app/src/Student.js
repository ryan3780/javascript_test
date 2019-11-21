import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Table } from "reactstrap";
import { Button } from "reactstrap";

class Student extends Component {
  state = {
    editing: false,
    id: this.props.info.id,
    score: this.props.info.score,
    englishIsOK: "",
    historyIsOK: "",
    mathIsOK: "",
    color: {
      english: "",
      history: "",
      math: ""
    }
  };

  // 삭제 버튼은 여기에 존재하니, 여기까지 Props를 받아서 사용해야 하나???
  // onRemove가 어디서 부터 왔는지, 알려주는 확장(extensions)이나 다른게 있나...?
  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  handleToglleEdit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

  // mutiple input을 핸들링하는 방법이 이것 말고는 없나??
  handleChange = e => {
    const { name, value } = e.target;
    const Pattern = /^\d{1,3}$/y;

    // console.log(name);
    // console.log(value);
    let msg = " no";
    let modifiedVal = "";
    let color = "red";
    if (Pattern.test(value) && value <= 100) {
      msg = " ok";
      modifiedVal = parseInt(value);
      color = "blue";
    }
    this.setState({
      score: { ...this.state.score, [name]: modifiedVal },
      [name + "IsOK"]: msg,
      color: { ...this.state.color, [name]: color }
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { onUpdate } = this.props;
    const { score } = this.state;
    // 콘솔 찍으면 왜 2번씩 찍히는 거지???
    // console.log(this.props.info.score);
    if (!prevState.editing && this.state.editing) {
      // 위에 state와 setstate 형식이 맞아야 ...값이 제대로 나오는 건가;;
      this.setState({
        score
      });
    }
    if (prevState.editing && !this.state.editing) {
      // console.log("english", this.state.score.english);

      onUpdate(this.props.info.id, {
        score: {
          english: parseInt(this.state.score.english),
          history: parseInt(this.state.score.history),
          math: parseInt(this.state.score.math)
        }
      });
    }
  }

  render() {
    const { name, id } = this.props.info;
    const { No } = this.props;
    const { editing, score } = this.state;

    const input = {
      width: "100px",
      height: "30px",
      boder: "1px solid black",
      textAlign: "center"
    };

    if (editing) {
      return (
        <tr>
          <td>{No}</td>
          <td>{name}</td>
          <td>{id}</td>
          <td id="english">
            <input
              id="english"
              name="english"
              style={input}
              value={this.state.score.english}
              onChange={this.handleChange}
            />
            <span style={{ color: this.state.color.english }}>
              {this.state.englishIsOK}
            </span>
          </td>
          <td>
            <input
              name="history"
              style={input}
              value={this.state.score.history}
              onChange={this.handleChange}
            />
            <span style={{ color: this.state.color.history }}>
              {this.state.historyIsOK}
            </span>
          </td>
          <td>
            <input
              name="math"
              style={input}
              value={this.state.score.math}
              onChange={this.handleChange}
            />
            <span style={{ color: this.state.color.math }}>
              {this.state.mathIsOK}
            </span>
          </td>
          <td>
            <Button onClick={this.handleToglleEdit}>완료</Button>
          </td>
          <td>
            <Button color="danger" onClick={this.handleRemove}>
              삭제
            </Button>
          </td>
        </tr>
      );
    }

    return (
      <tr>
        <td>{No}</td>
        <td>{name}</td>
        <td>{id}</td>
        <td>{score.english}</td>
        <td>{score.history}</td>
        <td>{score.math}</td>
        <td>
          <Button color="warning" onClick={this.handleToglleEdit}>
            수정
          </Button>
        </td>
        <td>
          <Button color="danger" onClick={this.handleRemove}>
            삭제
          </Button>
        </td>
      </tr>
    );
  }
}

export default Student;

// 이 컴포넌트에 수정을 넣는게 Velopert의 방식 // 왜 그럴까???
