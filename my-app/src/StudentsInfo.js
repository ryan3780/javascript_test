import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Table } from "reactstrap";
import { Button } from "reactstrap";

class StudentsInfo extends Component {
  static defaultProps = {
    info: {
      name: "Joker",
      id: 999999,
      englishScore: 99,
      historyScore: 99,
      KorHistoryScore: 99
    }
  };
  // 삭제 버튼은 여기에 존재하니, 여기까지 Props를 받아서 사용해야 하나???
  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  render() {
    const {
      name,
      id,
      englishScore,
      historyScore,
      KorHistoryScore
    } = this.props.info;
    return (
      <tr>
        <td></td>
        <td>{name}</td>
        <td>{id}</td>
        <td>{englishScore}</td>
        <td>{historyScore}</td>
        <td>{KorHistoryScore}</td>
        <td>
          <Button onClick={this.handleRemove}>삭제</Button>
        </td>
      </tr>
    );
  }
}

export default StudentsInfo;

// 이 컴포넌트에 수정을 넣는게 Velopert의 방식 // 왜 그럴까???
