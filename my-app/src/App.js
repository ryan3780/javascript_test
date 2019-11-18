import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Clock from "./Clock";
import StudentsList from "./StudentsList";

class App extends Component {
  state = {
    students: [
      {
        name: "Mandarin Wang",
        id: "20190002",
        score: {
          english: 90,
          history: 50,
          math: 70
        }
      },

      {
        name: "LeCun",
        id: "20190005",
        score: {
          english: 75,
          history: 70,
          math: 40
        }
      },
      {
        name: "Hot Smith",
        id: "20190001",
        score: {
          english: 65,
          history: 75,
          math: 79
        }
      },
      {
        name: "Martin Kudo",
        id: "20190003",
        score: {
          english: 82,
          history: 94,
          math: 96
        }
      },
      {
        name: "James Hound",
        id: "20190004",
        score: {
          english: 77,
          history: 95,
          math: 69
        }
      }
    ]
  };

  sortList = (key, order) => {
    const { students } = this.state;
    // order === true & false
    console.log(order);
    // console.log(students);
    //key는 id 값 중 하이픈'-' 앞을 가리킨다
    console.log(key);
    if (key === "re") {
      this.setState({
        students: students.sort((a, b) => (order ? a.id - b.id : b.id - a.id))
      });
    } else {
      this.setState({
        students: students.sort((a, b) =>
          //.score[key] = 객체의 프로퍼티를 뜻함
          order ? b.score[key] - a.score[key] : a.score[key] - b.score[key]
        )
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

  updateList = (id, data) => {
    const { students } = this.state;
    console.log("from app.js");
    // console.log(typeof data.score.english);
    const { english, history, math } = data.score;
    // console.log(isNaN(english));
    //type 바꾸는 것을 여기서 해야할까, 다른 컴포넌트에서 해야 할까?? 어떤게 관리 하기 쉬운거지???
    if (isNaN(english) || isNaN(history) || isNaN(math)) {
      alert("숫자만 입력 가능해요");
    } else {
      this.setState({
        students: students.map(info =>
          id === info.id ? { ...info, ...data } : info
        )
      });
    }
  };

  render() {
    return (
      <Container>
        <Row style={{ textAlign: "center" }}>
          <Col md={{ size: 10, offset: 1 }}>
            <Clock />
            <StudentsList
              students={this.state.students}
              onSort={this.sortList}
              onRemove={this.removeList}
              onUpdate={this.updateList}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
