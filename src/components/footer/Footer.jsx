import React from 'react'
import "./footer.css"
import MailchimpForm from './MailchimpForm'
import aprLogo from "../../assets/img/apr-logo2.png"
import { Container, Col, Row } from 'react-bootstrap'
import navIcon1 from "../../assets/img/nav-icon1.svg"
import githubLogo from "../../assets/img/github-logo.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={12} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href=""><img src={navIcon1} /></a>
                            <a href=""><img src={githubLogo} /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer