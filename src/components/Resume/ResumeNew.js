import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import resumePdf from "../../Assets/Anjali_Mehta_Resume_2026.pdf";
import transcriptPdf from "../../Assets/Transcript_UVA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
    const [width, setWidth] = useState(1200);
    const [selectedDoc, setSelectedDoc] = useState("resume");
    const [numPages, setNumPages] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    // Reset page count when switching documents
    useEffect(() => {
        setNumPages(0);
    }, [selectedDoc]);

    const selectedFile = selectedDoc === "resume" ? resumePdf : transcriptPdf;
    const selectedTitle = selectedDoc === "resume" ? "Resume" : "Transcript";
    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />

                <Row style={{ justifyContent: "center", gap: "16px", marginBottom: "24px" }}>
                    <Col md={5}>
                        <Card className="project-card-view">
                            <Card.Body>
                                <Card.Title>Resume</Card.Title>
                                <Card.Text>Click to preview or download your resume.</Card.Text>
                                <Button
                                    variant="outline-primary"
                                    onClick={() => setSelectedDoc("resume")}
                                    style={{ marginRight: "10px" }}
                                >
                                    View Resume
                                </Button>
                                <Button variant="outline-secondary" href={resumePdf} target="_blank">
                                    <AiOutlineDownload />
                                    &nbsp;Download
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={5}>
                        <Card className="project-card-view">
                            <Card.Body>
                                <Card.Title>Transcript</Card.Title>
                                <Card.Text>Click to preview or download your transcript.</Card.Text>
                                <Button
                                    variant="outline-primary"
                                    onClick={() => setSelectedDoc("transcript")}
                                    style={{ marginRight: "10px" }}
                                >
                                    View Transcript
                                </Button>
                                <Button variant="outline-secondary" href={transcriptPdf} target="_blank">
                                    <AiOutlineDownload />
                                    &nbsp;Download
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="resume" style={{ justifyContent: "center", marginTop: "10px" }}>
                    <h4 style={{ marginBottom: "16px", color: "var(--imp-text-color)" }}>{selectedTitle} Preview</h4>

                    <Document
                        file={selectedFile}
                        className="d-flex justify-content-center"
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {/* Render all pages when available */}
                        {Array.from(new Array(numPages), (el, index) => (
                            <div key={`page_${index + 1}`} style={{ marginBottom: 16 }}>
                                <Page pageNumber={index + 1} scale={width > 786 ? 1.3 : 0.6} />
                            </div>
                        ))}
                    </Document>
                </Row>              
            </Container>
        </div>
    );
}

export default ResumeNew;