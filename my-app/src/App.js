import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Students from "./Students";
import Clock from "./Clock";
import TestData from "./test.json";

class App extends Component {
  render() {
    return (
      <Container>
        <Row style={{ textAlign: "center" }}>
          <Col md={{ size: 10, offset: 1 }}>
            <Students />
            <Clock />
            {TestData.map((data, index) => {
              return (
                <div key={index}>
                  <h1>{data.title}</h1>
                  <p>{data.content}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
