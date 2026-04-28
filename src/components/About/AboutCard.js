import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi &mdash; I'm <span className="purple">Anjali Mehta</span> from{" "}
                        <span className="purple">Virginia</span>.
                        <br />
                        I graduated in 2025 from the University of Virginia with a B.S. in
                        Computer Science Engineering and a minor in Data Science. I have
                        been working as a software developer for one year, focusing on
                        practical, maintainable software and data-driven features.
                        <br />
                        My core interests include Machine Learning, Data Privacy, and
                        Software Engineering &mdash; I enjoy turning technical ideas into reliable
                        products and learning new tooling along the way.
                        <br />
                        <br />
                        I am hard-working, a quick learner, and motivated to deliver
                        high-quality solutions.
                        <br />
                        <br />
                        Outside of work, I pursue a variety of hobbies and activities:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Reading &mdash; fiction and technical books
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Experimental cooking and recipe development
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Environmental advocacy and community volunteering
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Dog care &amp; fostering &mdash; pet enthusiast
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Traveling, photography, and hiking
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;