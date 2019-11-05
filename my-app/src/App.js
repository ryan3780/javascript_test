import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Students from "./Students";
import Clock from "./Clock";

class App extends Component {
  render() {
    return (
      <Container>
        <Row style={{ textAlign: "center" }}>
          <Col md={{ size: 10, offset: 1 }}>
            <Students />
            <Clock />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
