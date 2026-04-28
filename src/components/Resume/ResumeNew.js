import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import resumePdf from "../../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import transcriptPdf from "../../Assets/Official Transcript 2024.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />

                <Row style={{ justifyContent: "center", position: "relative", gap: "12px" }}>
                    <Button
                        variant="outline-primary"
                        href={resumePdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download Resume
                    </Button>

                    <Button
                        variant="outline-secondary"
                        href={transcriptPdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download Transcript
                    </Button>
                </Row>

                <Row className="resume" style={{ justifyContent: "center", marginTop: "30px" }}>
                    <Document file={resumePdf} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.3 : 0.6} />
                    </Document>
                </Row>

                <Container style={{ marginTop: "40px", maxWidth: "920px" }}>
                    <Row>
                        <Col>
                            <h2 style={{ color: "var(--imp-text-color)" }}>Education</h2>
                            <p>
                                <strong>University of Virginia</strong> &ndash; Aug 2021 &ndash; May 2025
                                <br />
                                Bachelor of Science in Computer Science Engineering, Minor in Data Science; GPA: 3.76/4.0
                                <br />
                                Charlottesville, VA
                                <br />
                                Organizations: Public Policy for Engineers, Alpha Omega Epsilon, UVA Engineering Tour Guide, Alternative Spring Break, Fashion and AI Club
                                <br />
                                Completed a semester abroad in Siena, Italy (Spring 2024)
                            </p>

                            <h2 style={{ color: "var(--imp-text-color)", marginTop: "20px" }}>Experience</h2>

                            <h5>Software Developer &mdash; AVEVA</h5>
                            <p><em>July 2025 &ndash; Present, Philadelphia, PA</em></p>
                            <ul>
                                <li>Worked with an agile engineering team developing and maintaining cloud-based microservices.</li>
                                <li>Built a secure PATCH API endpoint to support dynamic updates to datasets within an enterprise data harmonization platform.</li>
                                <li>Produced technical documentation and troubleshooting guides through internal wikis to support 24/7 on-call support.</li>
                                <li>Developed dataset profiling features (unique values, duplicates, distributions) that enabled AI-generated natural language summaries for end users.</li>
                            </ul>

                            <h5>Human Centered Design Intern &mdash; Davenport Strategic Innovation and Design</h5>
                            <p><em>January 2025 &ndash; May 2025, Charlottesville, VA</em></p>
                            <ul>
                                <li>Conducted stakeholder interviews and surveys to identify user needs for a nonprofit-matching platform.</li>
                                <li>Consolidated qualitative research into product requirements and created Figma mock-ups for early-stage designs.</li>
                            </ul>

                            <h5>Software Developer Intern &mdash; AVEVA</h5>
                            <p><em>May 2024 &ndash; August 2024, Philadelphia, PA</em></p>
                            <ul>
                                <li>Automated deployment of cloud microservices using Azure infrastructure as code, improving reliability and scalability.</li>
                                <li>Improved system performance and code quality through unit testing and debugging.</li>
                                <li>Documented deployment pipelines and engineering workflows for internal use.</li>
                            </ul>

                            <h5>Data Science Intern &mdash; UVA Biocomplexity Institute</h5>
                            <p><em>June 2023 &ndash; January 2024, Arlington, VA</em></p>
                            <ul>
                                <li>Developed a machine learning-based business climate classifier for Fairfax County.</li>
                                <li>Featured on WJLA Channel 7 News for research contributions and impact on policy discussions.</li>
                                <li>Built data models integrating census and economic data using statistical modeling, NLP, and web scraping.</li>
                            </ul>

                            <h2 style={{ color: "var(--imp-text-color)", marginTop: "20px" }}>Selected Writing & Research</h2>

                            <h5>White Box vs. Black Box &mdash; Ethical Trade-Offs of AI Transparency</h5>
                            <p><em>May 2025 &mdash; University of Virginia</em></p>
                            <ul>
                                <li>Conducted a socio-technical analysis using the Social Construction of Technology (SCOT) framework to evaluate AI transparency.</li>
                                <li>Analyzed trade-offs between interpretability, innovation, privacy, and accountability in machine learning systems.</li>
                                <li>Developed policy-oriented recommendations for responsible and context-dependent AI deployment.</li>
                            </ul>

                            <h5>Enhancing Minority Business Representation through Machine Learning</h5>
                            <p><em>May 2025 &mdash; University of Virginia</em></p>
                            <ul>
                                <li>Developed a machine learning classifier to identify minority-owned businesses in Fairfax County, revealing dataset underrepresentation.</li>
                                <li>Designed an interpretable decision-tree model to prioritize transparency in policy applications.</li>
                                <li>Authored a technical report detailing model architecture, data pipelines, and evaluation methodology.</li>
                            </ul>

                            <h5>The Threat of Facial Recognition Technology</h5>
                            <p><em>May 2023 &mdash; UN Science, Technology and Innovation Forum</em></p>
                            <ul>
                                <li>Authored and presented a policy paper analyzing facial recognition systems and their societal implications.</li>
                                <li>Translated complex machine learning concepts into clear policy recommendations for a global audience.</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default ResumeNew;