import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Gallery from "./Gallery";

function About() {
    const timeline = [
        { src: "/gallery/dogs.jpg", title: "My two dogs, Oakley (lab mix) and Maya (chihuahua mix)", year: "2022" },
        { src: "/gallery/aoe.jpg", title: "I was part of Alpha Omega Epsilon, a professional and social sorority", year: "2022" },
        { src: "/gallery/asb.jpg", title: "Volunteering with the NPS for Spring Break", year: "2023" },
        { src: "/gallery/siena.jpg", title: "Semester Abroad in Siena, Italy", year: "2024" },
        { src: "/gallery/italy class.jpg", title: "CS classes while studying abroad", year: "2024" },
        { src: "/gallery/va.jpg", title: "University of Virginia Graduation!", year: "2025" },
        { src: "/gallery/silai.jpg", title: "I organized a photoshoot for a south asian fashion brand called Silai the Label", year: "2025" },
        { src: "/gallery/food.jpg", title: "I moved to Philadelphia and started exploring new recipes!", year: "2025" },
        { src: "/gallery/sf.jpg", title: "I managed to squeeze in some travel over the past year (San Francisco, CA)", year: "2025" }
  ];

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "30px",
            }}
          >
            <h1 className="about-title">Anjali Mehta</h1>
            <p className="about-subtitle">
                          Software Developer (for now) 
            </p>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "80px", paddingBottom: "30px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h2 className="project-heading">
          <strong className="purple">Photos</strong>
        </h2>

        <Gallery items={timeline} />

      </Container>
    </Container>
  );
}

export default About;
