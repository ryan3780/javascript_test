import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

class Students extends Component {
  // 객체로 써야한다 !! state는 !!
  state = {
    students: [
      {
        name: "KIM",
        id: "20190002",
        englishScore: 90,
        historyScore: 50,
        KorHistoryScore: 70
      },

      {
        name: "KANG",
        id: "20190005",
        englishScore: 100,
        historyScore: 100,
        KorHistoryScore: 100
      },
      {
        name: "PARK",
        id: "20190001",
        englishScore: 20,
        historyScore: 30,
        KorHistoryScore: 40
      },
      {
        name: "HONG",
        id: "20190003",
        englishScore: 30,
        historyScore: 70,
        KorHistoryScore: 80
      },
      {
        name: "NA",
        id: "20190004",
        englishScore: 80,
        historyScore: 60,
        KorHistoryScore: 50
      }
    ]
  };

  compareByEngScoreDesc = () => {
    const { students } = this.state;
    this.setState({
      students: students.sort((a, b) => b.englishScore - a.englishScore)
    });
  };

  compareByEngScoreAsce = () => {
    const { students } = this.state;
    this.setState({
      students: students.sort((a, b) => a.englishScore - b.englishScore)
    });
  };

  compareByhistoryScoreDesc = () => {
    const { students } = this.state;
    this.setState({
      students: students.sort((a, b) => b.historyScore - a.historyScore)
    });
  };

  compareByhistoryScoreAsce = () => {
    const { students } = this.state;
    this.setState({
      students: students.sort((a, b) => a.historyScore - b.historyScore)
    });
  };

  compareByKorScoreDesc = () => {
    const { students } = this.state;
    this.setState({
      students: students.sort((a, b) => b.KorHistoryScore - a.KorHistoryScore)
    });
  };

  compareByKorScoreAsce = () => {
    const { students } = this.state;
    this.setState({
      students: students.sort((a, b) => a.KorHistoryScore - b.KorHistoryScore)
    });
  };

  render() {
    //비구조 할당? 괄호에 변수명 쓰는게 어떤 의미인가요?
    const { students } = this.state;
    const List = students.map((list, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{list.name}</td>
          <td>{list.id}</td>
          <td>{list.englishScore}</td>
          <td>{list.historyScore}</td>
          <td>{list.KorHistoryScore}</td>
          <td>
            <Button>삭제</Button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <table border="1">
          <tbody>
            <tr>
              <td>No</td>
              <td>Name</td>
              <td>ID</td>
              <td>
                영어성적
                <Button color="danger" onClick={this.compareByEngScoreDesc}>
                  위
                </Button>
                <Button color="primary" onClick={this.compareByEngScoreAsce}>
                  아래
                </Button>
              </td>
              <td>
                역사성적
                <Button color="danger" onClick={this.compareByhistoryScoreDesc}>
                  위
                </Button>
                <Button
                  color="primary"
                  onClick={this.compareByhistoryScoreAsce}
                >
                  아래
                </Button>
              </td>
              <td>
                한국사성적
                <Button color="danger" onClick={this.compareByKorScoreDesc}>
                  위
                </Button>
                <Button color="primary" onClick={this.compareByKorScoreAsce}>
                  아래
                </Button>
              </td>
            </tr>
            {List}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Students;
