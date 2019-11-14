import React, { Component } from "react";
import Student from "./Student";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { Button } from "reactstrap";

class StudentsList extends Component {
  handleClick = e => {
    const buttonId = e.target.id;
    const { onSort } = this.props;

    let key = "english";
    let order = true;

    const ids = buttonId.split("-", 2);
    console.log(ids);

    key = ids[0];
    order = ids[1] === "asc" ? true : false;

    //버튼이 눌려지면 버튼의 ID 값을 바꿔준다
    e.target.id = key + "-" + (ids[1] === "asc" ? "desc" : "asc");

    onSort(key, order);
  };

  render() {
    const { students, onRemove, onUpdate } = this.props;
    const list = students.map((student, idx) => (
      <Student
        key={student.id}
        info={student}
        onRemove={onRemove}
        onUpdate={onUpdate}
        No={idx + 1}
      />
    ));
    return (
      <div>
        <Table hover style={{ marginTop: "50px" }}>
          <tbody>
            <tr>
              <td>No</td>
              <td>Name</td>
              <td>ID</td>
              <td>
                <Button
                  id="english-desc"
                  color="primary"
                  onClick={this.handleClick}
                >
                  영어
                </Button>
              </td>
              <td>
                <Button
                  id="history-desc"
                  color="primary"
                  onClick={this.handleClick}
                >
                  역사
                </Button>
              </td>
              <td>
                <Button
                  id="math-desc"
                  color="primary"
                  onClick={this.handleClick}
                >
                  수학
                </Button>
              </td>
              <td></td>
              <td>
                <Button id="re-desc" color="info" onClick={this.handleClick}>
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

export default StudentsList;
