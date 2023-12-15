import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdDone, MdClose } from "react-icons/md";

function Toolstack() {
  const bucketItems = [
    { title: "Learn to play the guitar", completed: true },
    { title: "Visit Japan", completed: false },
    { title: "Write a book", completed: false },
    { title: "Learn a new language", completed: true },
    // Add more items as needed...
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {bucketItems.map((item, index) => (
        <Col xs={6} md={3} key={index} className="bucket-item">
          <h4>{item.title}</h4>
          {item.completed ? <MdDone className="completed-icon" /> : <MdClose className="incomplete-icon" />}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
