import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Row, Col } from "react-bootstrap";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <Row>
          <Col md={7}>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                Hi Everyone, I am <span className="purple">Anjali Mehta </span>
                from <span className="purple"> Virginia</span>
                <br />
                I am currently a third year at the University of Virginia.
                <br />
                I'm studying Computer Science Engineering with a minor in Data Science. I have a strong interest in Machine Learning, Data Privacy, and Software Engineering. I choose to study computer science because I hope to make a positive impact on the world - and learn as much as possible while doing it! 
                <br />
                <br />
                I am a hard worker, a quick learner, and very motivated! 
                <br />
                <br />
                Here are some of the many hats that I wear: 
              </p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Avid reader of books (mostly fiction) 
                </li>
                <li className="about-activity">
                  <ImPointRight /> Experimental chef 
                </li>
                <li className="about-activity">
                  <ImPointRight /> Environmental Protection Activist 
                </li>
                <li className="about-activity">
                  <ImPointRight /> Dog-Lover (2 dogs of my own and many fosters!)
                </li>
                <li className="about-activity">
                  <ImPointRight /> Traveler of the world (hopefully)
                </li>
              </ul>
            </blockquote>
          </Col>
          <Col md={5}>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                  Feel free to <span className="purple">connect </span>with me
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/anjali8203"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://linkedin.com/in/anjali-mehta-a2887072"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="mailto:anjali8203@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <MdEmail />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
