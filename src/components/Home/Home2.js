import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={12} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I'm constantly looking to learn and grow in this life - and that's exactly why I got into Computer Science!
                            <br />
                            <br />My favorite language (as of now) is{" "}
                            <i>
                                <b className="purple"> Java </b>
                            </i>
                            <br />
                            <br />
                            My growing fields of interest are&nbsp;
                            <i>
                                <b className="purple"> Machine Learning </b> and{" "}
                                <b className="purple">Data Privacy.</b>
                            </i>
                            <br />
                            <br />
                            Some thing I am very passionate about is{" "}
                            <b className="purple">Environmental Activism</b> and
                            <i>
                                <b className="purple"> I hope to use my skills to make a difference some day</b>
                            </i>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect with me</span>
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
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;