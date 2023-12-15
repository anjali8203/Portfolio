import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdDone, MdClose } from "react-icons/md";

function Toolstack() {
  const bucketItems = [
    { title: "Make a portfolio website", completed: true },
    { title: "Go sky diving", completed: false },
    { title: "Visit Japan", completed: false },
    { title: "Write a book", completed: false },
    { title: "Learn a new language", completed: false },
    { title: "Run a marathon", completed: false },
    { title: "Meet a celebrity", completed: false },
    { title: "Do a backflip", completed: false },
    { title: "Cook a 5 course meal", completed: false },
    { title: "Paint or draw daily", completed: false },
    { title: "Visit every state in the US", completed: false },
    { title: "Give 100k to charity", completed: false },
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
