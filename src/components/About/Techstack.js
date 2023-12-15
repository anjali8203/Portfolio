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
        CSS
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Java
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Python
      </Col>
    </Row>
  );
}

export default Techstack;
