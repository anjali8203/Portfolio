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
                <p style={{ color: "var(--muted)" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="Modeling the Business Climate in Local Counties"
                            description="I worked with a team to develop a classifier model using multiple predictors to evaluate the economic landscape of minority-owned businesses in Fairfax County. The model utilized statistical techniques and Machine Learning. I comprised the findings into a final report in the form of a website, which I presented to stakeholders."
                            ghLink="https://github.com/DSPG-Young-Scholars-Program/dspg23businessclimate"
                            demoLink="https://dspg-young-scholars-program.github.io/dspg23businessclimate/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bitsOfCode}
                            isBlog={false}
                            title="BioKind Analytics"
                            description="This was a project done for BioKind Analytics, a non-profit organization that provides data analysis to health care organizations. I worked with a team to examine the relationship between altruism towards the healthcare industry and certain economic indicators using open-source data. The findings were compiled into a website."
                            ghLink="https://github.com/DSPG-Young-Scholars-Program/dspg23_website_template"
                            demoLink="https://dspg-young-scholars-program.github.io/biokind_dspg23/index.html"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor}
                            isBlog={false}
                            title="Policy Brief - The Threat of Facial Recognition Technology"
                            description="I wrote a policy brief regarding an imminent issue facing the world and submitted it to the United Nation’s Science Technology and Information forum. This policy brief was accepted and I attended the UN conference; the brief is posted on the official website."
                            demoLink="https://sdgs.un.org/sites/default/files/2023-05/A6%20-%20Mehta%20-%20The%20Threat%20of%20Facial%20Recognition%20Softwares.pdf"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={leaf}
                            isBlog={false}
                            title="Captain Pixel's Office Hours"
                            description="Hackathon project: an interactive educational game built with Lua and RobloxStudio that supports asynchronous learning for elementary students waiting for teacher assistance."
                            ghLink="https://devpost.com/software/captain-pixel-s-office-hour-queue"
                            demoLink="https://github.com/salachyan/Captain_Pixels_Office_Hour_Queue"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={suicide}
                            isBlog={false}
                            title="Project Management Application"
                            description="A full-stack project management application using Django and PostgreSQL, integrating Amazon S3 for secure file uploads and RESTful APIs for front/back communication. Beta testing was used to collect user feedback."
                            ghLink="https://github.com/anjali8203/PMA"
                            demoLink="https://github.com/anjali8203/PMA"
                        />
                    </Col>

                    {/* Capstone project entry (White Box vs Black Box) */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion}
                            isBlog={false}
                            title="White Box vs. Black Box — Ethical Trade-Offs of AI Transparency"
                            description="Capstone: a socio-technical analysis applying the SCOT framework to evaluate AI transparency. I examined trade-offs between interpretability, innovation, privacy, and accountability and developed policy-oriented recommendations for responsible AI deployment. This work informed my thinking about transparent models for policy contexts."
                            ghLink=""
                            demoLink=""
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;