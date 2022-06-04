import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { ProgressBar, Container, Button, Card, Row, Col } from 'react-bootstrap';

import '../App.css';
import project1 from '../Images/Project1.jpg';
import project2 from '../Images/Project2.jpg';

function Projects() {
    return(
        <React.Fragment>
            <Container className="ps-5 pe-5">
                <h1 id="projects" className="text-light">Projects</h1>
                <ProgressBar variant="info" now={100} className='mb-4' style={{height: "6px"}}/>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card bg="darkblue" text="light">
                            <Card.Img variant="top" src={project1} />
                            <Card.Body>
                                <Card.Title>Project 1</Card.Title>
                                <Card.Text>
                                    This is some detailed description about Project.
                                    And it will give you proper insight as to what things are going on.
                                </Card.Text>
                                <Button variant="outline-warning">Go Somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="darkblue" text="light">
                            <Card.Img variant="top" src={project2} />
                            <Card.Body>
                                <Card.Title>Project 2</Card.Title>
                                <Card.Text>
                                    This is some detailed description about Project.
                                    And it will give you proper insight as to what things are going on.
                                </Card.Text>
                                <Button variant="outline-warning">Go Somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default Projects;