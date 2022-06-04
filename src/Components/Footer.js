import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';

function Footer() {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect bg="darkyellow" variant="dark" expand="md" className='py-0'>
                <Nav.Link className="m-auto text-dark font-monospace" style={{fontSize: "10px"}}>
                    Designed and Built by An Educated Vegtable
                </Nav.Link>
            </Navbar>
        </React.Fragment>
    );
};

export default Footer;