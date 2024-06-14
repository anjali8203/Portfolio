import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        C
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        HTML
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        C#
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Java
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Python
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Matlab
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        R
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        SQL
      </Col>
    </Row>
  );
}

export default Techstack;
