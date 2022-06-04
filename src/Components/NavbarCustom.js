import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import '../App.css';

function NavbarCustom() {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect bg="darkblue" variant="dark" sticky="top" expand="md">
                <Container>
                    <Navbar.Brand>
                        Abdullah Shafqat
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Nav.Link href="#" onClick={() => {document.getElementById('about').scrollIntoView();}}>About Me</Nav.Link>
                            <Nav.Link href="#" onClick={() => {document.getElementById('projects').scrollIntoView();}}>Projects</Nav.Link>
                            <Nav.Link href="#" className="me-3" onClick={() => {document.getElementById('contact').scrollIntoView();}}>Contact</Nav.Link>
                            <Button href="#" variant="outline-warning">Download Resume</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
};

export default NavbarCustom;