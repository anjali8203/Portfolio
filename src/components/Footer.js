import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="footer-content">
        <Col md={12} className="footer-body">
          <p className="footer-text">Anjali Mehta</p>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/anjali8203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/anjali-mehta-a2887072"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:anjali8203@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <MdEmail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
