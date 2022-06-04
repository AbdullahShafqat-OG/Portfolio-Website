import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { ProgressBar, Container, Button, Form, Row, Col } from 'react-bootstrap';

function Contact() {
    return (
        <React.Fragment>
            <Container className="p-5">
                <h1 id="contact" className="text-light">Contact</h1>
                <ProgressBar variant="info" now={100} className='mb-4' style={{height: "6px"}}/>
                <h4 className="text-light">Let's work together</h4>
                <Form className="mx-auto text-light">
                    <Row>
                        <Col sm>
                            <Form.Group className="mb3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name"/>
                            </Form.Group>
                        </Col>
                        <Col sm>
                            <Form.Group className="mb3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Your Email"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Your Message"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="d-grid gap-2">
                        <Button variant="outline-warning" type="Submit" className="mt-3">Submit</Button>
                    </div>
                    
                </Form>
            </Container>
        </React.Fragment>
    )
};

export default Contact;