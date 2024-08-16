import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <p>&copy; 2022 Simply Sliced.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <ul className="footer-links">
                            <li>Find us on:</li>
                            <li><a href="https://www.facebook.com/">Facebook</a></li>
                            <li>|</li>
                            <li><a href="https://www.tripadvisor.co.nz/">Trip Adviser</a></li>
                            <li>|</li>
                            <li><a href="https://www.twitter.com/">Twitter</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;