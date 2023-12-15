import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anjali Mehta </span>
            from <span className="purple"> Virginia</span>
            <br />
            I am currently a third year at University of Virginia.
            <br />
            I'm studying Computer Science Engineering with a minor in Data Science. 
            <br />
            <br />
            Here are some activities that I love: 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Fiction + Fantasy books 
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning to cook different foods
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "They always say time changes things, but "{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
