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
            I am currently in my fourth year at the University of Virginia.
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
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
