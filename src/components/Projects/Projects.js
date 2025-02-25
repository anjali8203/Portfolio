import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Modeling the Business Climate in Local Counties"
              description="I worked with a team to develop a classifier model using multiple predictors to evaluate the economic landscape of minority-owned businesses in Fairfax County. The model utilized statistical techniques and Machine Learning. I comprised the findings into a final report in the form of a website, which I presented to stakeholders.  "
              ghLink="https://github.com/DSPG-Young-Scholars-Program/dspg23businessclimate"
              demoLink="https://dspg-young-scholars-program.github.io/dspg23businessclimate/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BioKind Analytics"
              description="This was a project done for BioKind Analytics, a non-profit organization that provides data analysis to health care organizations. I worked with a team to examine the relationship between altriusm towards the healthcare industry and certain economic indicators using only open source data. The findings for this were compiled into a website. ."
              ghLink="https://github.com/DSPG-Young-Scholars-Program/dspg23_website_template"
              demoLink="https://dspg-young-scholars-program.github.io/biokind_dspg23/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Policy Brief - The Threat of Facial Recognition Technology"
              description="I wrote a policy brief regarding an imminent issue facing the world and submitted it to the United Nation’s Science Technology and Information forum. This policy brief was accepted and I had the opportunity to attend the UN conference, and this brief is posted on the official website as well. "
              demoLink="https://sdgs.un.org/sites/default/files/2023-05/A6%20-%20Mehta%20-%20The%20Threat%20of%20Facial%20Recognition%20Softwares.pdf"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Captain Pixel's Office Hours"
              description="This was a hackathon project,  tasked with creating something to improve education and sustainability, with my team I used Lua and RobloxStudio to create a fully interactive education game catered to young elementary school children. This project was borne due to what students experienced during the pandemic, in the hopes that during asynchronous school, while a student is waiting to speak with a teacher they can educate themselves. "
              ghLink="https://devpost.com/software/captain-pixel-s-office-hour-queue"
              demoLink="https://github.com/salachyan/Captain_Pixels_Office_Hour_Queue"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Project Management Application"
              description= "I developed a full-stack project management application using Django for the back-end and PostgreSQL for thedatabase. I Integrated Amazon S3 to enable secure file uploads with metadata storage for user-generated content. This project designed and consumed RESTful APIs to streamline front-end and back-end communication. During this process we conducted Beta Testing to gather user feedback. "
              ghLink="https://github.com/anjali8203/PMA"
              demoLink="https://github.com/anjali8203/PMA"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
