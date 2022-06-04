import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { ProgressBar, Container } from 'react-bootstrap';

import '../App.css';

function AboutMe() {
    return (
        <React.Fragment>
            <Container className="p-5">
                <h1 id="about" className="text-light">About Me</h1>
                <ProgressBar variant="info" now={100} className='mb-4' style={{height: "6px"}}/>
                <p>
                    I am a junior games developer from someplace in this majestic universe.
                    I am passionate about games and about languages such as C#, Python, and C++.
                </p>
                <p>
                    I am currently enrolled in Bachelors of Software Engineering in NUST, 
                    and am looking for a Unity Developer Intern position.
                </p>
                <p>
                    When not coding I enjoy playing tennis, and playing games that others have made.
                </p>
            </Container>
        </React.Fragment>
    );
};

export default AboutMe;