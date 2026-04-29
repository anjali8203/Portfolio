import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi - I'm <span className="purple">Anjali Mehta</span>.
                        <br />
                        I graduated from UVA in 2025 with a B.S. in Computer Science Engineering and a minor in Data Science. I am a software developer by training, but I am also curious about the paths that branch out from there. I love dedicating myself to new experiences that challenge me.
                        Over the past year, I have navigated significant challenges, including undergoing treatment for thyroid cancer. That experience prompted me to reflect more deeply on how I want to apply my skills. Both my professional and academic work further reflects my interest in the intersection of technology, analysis, and real-world impact. 
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Reading - fictional books. I always have a book going. Tell me what you're reading and we can trade recommendations!
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Cooking & Baking - I like to take on a new challenge by picking a country and trying to make an entire spread from that place!
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Volunteering - I frequently volunteer at local animal shelters and food banks, and I am passionate about giving back to the community.
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Dogs - I have two foster fails! One is a chihuahua/dachshund mix named Maya and the other is a Lab/Shepherd mix named Oakley!
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Traveling - I studied abroad in Italy and traveled around in Europe for 4 months! My favorite places I visited were Prague, Rome, and Malta.
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;