import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiPython, DiCode, DiHtml5, DiCss3, DiRProject, DiMatlab } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiCode /> {/* Placeholder for C */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /> {/* Placeholder for HTML */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> {/* Placeholder for CSS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> {/* Java */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Python */}
      </Col>
    </Row>
  );
}

export default Techstack;
