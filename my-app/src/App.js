import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Clock from "./Clock";
// dummy JSON 파일 읽어와서 화면에 나타내기
import TestData from "./test.json";
import StudentsInfoList from "./StudentsInfoList";

class App extends Component {
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

  compareButton = buttonId => {
    const { students } = this.state;
    // 정렬 버튼을 누르면 App.js에서 바로 아래에 있는 콘솔이 찍힌다. 다른 조건은 안그런데...왜그러지???
    if (buttonId === 1) {
      console.log(buttonId);
      this.setState({
        students: students.sort((a, b) => a.id - b.id)
      });
    } else if (buttonId === 2) {
      this.setState({
        students: students.sort((a, b) => b.englishScore - a.englishScore)
      });
    } else if (buttonId === 3) {
      this.setState({
        students: students.sort((a, b) => a.englishScore - b.englishScore)
      });
    } else if (buttonId === 4) {
      this.setState({
        students: students.sort((a, b) => b.historyScore - a.historyScore)
      });
    } else if (buttonId === 5) {
      this.setState({
        students: students.sort((a, b) => a.historyScore - b.historyScore)
      });
    } else if (buttonId === 6) {
      this.setState({
        students: students.sort((a, b) => b.KorHistoryScore - a.KorHistoryScore)
      });
    } else {
      this.setState({
        students: students.sort((a, b) => a.KorHistoryScore - b.KorHistoryScore)
      });
    }
  };
  // 파라미터가 있는 함수들은 App.js에서 선언 하고, 나머지는 다 Props로???
  removeList = id => {
    const filteredStudents = this.state.students.filter(list => list.id !== id);
    this.setState({
      students: filteredStudents
    });
  };

  render() {
    return (
      <Container>
        <Row style={{ textAlign: "center" }}>
          <Col md={{ size: 10, offset: 1 }}>
            <Clock />
            {/*  dummy JSON 파일 읽어와서 화면에 나타내기 */}
            {TestData.map((data, index) => {
              return (
                <div key={index}>
                  <h1>{data.title}</h1>
                  <p>{data.content}</p>
                </div>
              );
            })}
            {/* {JSON.stringify(students)} */}
            <StudentsInfoList
              score={this.state.students}
              onClick={this.compareButton}
              onRemove={this.removeList}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
