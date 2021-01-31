import React from 'react';
import '../../pages/Contact/contact.css';
import {Container, Row, Col} from "shards-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Contact() {

    return(
        <Container className="container">
            <Row>
            <Col sm="4"></Col>
            <Col sm="4">
                <h1 className="contactInfo">Contact</h1>
            </Col>
            <Col sm="4"></Col>
            </Row>
            <Row>
                <Col sm="3"></Col>
                <Col sm="2">
                <a onClick = "parent.location='mailto:smith.carlicia@gmail.com" target="__blank">
                <FontAwesomeIcon icon={faEnvelope} />
                </a>
                </Col>
                <Col sm="2">
                <a href="https://www.linkedin.com/in/carlicia-smith-613194b4/" target="__blank" >
                    <FontAwesomeIcon icon={faLinkedin}  />
                </a>
                </Col>
                <Col sm="2">
                <a href="https://github.com/smith-carlicia" target="__blank">
                    <FontAwesomeIcon icon={faGithub}/>    
                </a>
                </Col>
                <Col sm="3"></Col>
            </Row>


        </Container>
    )
}

export default Contact;