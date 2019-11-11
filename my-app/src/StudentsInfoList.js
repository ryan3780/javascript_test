import React, { Component } from "react";
import StudentsInfo from "./StudentsInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { Button } from "reactstrap";

class StudentsInfoList extends Component {
  static defaultProps = {
    score: [],
    onRemove: () => console.warn("onRemove not defined")
  };

  // 정렬하는 기능인데...onClick()의 파라미터를 이쁘게 줄 방법은 없나...?
  handleClick = e => {
    console.log(e.target.id);
    const buttonId = e.target.id;
    // 첫번째 조건문만 App.js에서 콘솔로 찍힌다...왜그러지???
    if (buttonId === "re") {
      this.props.onClick(1);
    } else if (buttonId === "engDesc") {
      this.props.onClick(2);
    } else if (buttonId === "engAsce") {
      this.props.onClick(3);
    } else if (buttonId === "hisDesc") {
      this.props.onClick(4);
    } else if (buttonId === "hisAsce") {
      this.props.onClick(5);
    } else if (buttonId === "korDesc") {
      this.props.onClick(6);
    } else if (buttonId === "korAsce") {
      this.props.onClick(7);
    }
  };

  render() {
    const { score, onRemove } = this.props;
    const list = score.map((data, idx) => (
      <StudentsInfo
        key={data.id}
        info={data}
        onRemove={onRemove}
        No={idx + 1}
      />
    ));
    return (
      <div>
        <Table hover style={{ marginTop: "50px" }}>
          <tbody>
            <tr>
              {/* No에 차례대로 1,2,3,4,5 숫자를 부여 하고 싶은데 어떻게 할까...? Props로 안되나...? */}
              <td>No</td>
              <td>Name</td>
              <td>ID</td>
              <td>
                영어성적
                <Button id="engDesc" color="danger" onClick={this.handleClick}>
                  위
                </Button>
                <Button id="engAsce" color="primary" onClick={this.handleClick}>
                  아래
                </Button>
              </td>
              <td>
                역사성적
                <Button id="hisDesc" color="danger" onClick={this.handleClick}>
                  위
                </Button>
                <Button id="hisAsce" color="primary" onClick={this.handleClick}>
                  아래
                </Button>
              </td>
              <td>
                한국사성적
                <Button id="korDesc" color="danger" onClick={this.handleClick}>
                  위
                </Button>
                <Button id="korAsce" color="primary" onClick={this.handleClick}>
                  아래
                </Button>
              </td>
              <td>
                <Button id="re" color="info" onClick={this.handleClick}>
                  정렬
                </Button>
              </td>
            </tr>
            {list}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default StudentsInfoList;
