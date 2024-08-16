'use client'
import React from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup, Map } from 'react-bootstrap';


export default function Contact() {
    const ContactUsBody = () => {
        return (
            <Container>
                <Row className="justify-content-center my-5">
                    <Col md={8} lg={6}>
                        <h2 className="text-center">Contact Us</h2>
    
                        <Card style={{backgroundColor: "#f7dcb4", borderRadius: "5%"}} className="my-4 p-4">
                            <Card.Body>
                                <h3>Get in Touch</h3>
                                <Form action="/submit-contact-form" method="post">
                                    <Form.Group controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" required />
                                    </Form.Group>
    
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" required />
                                    </Form.Group>
    
                                    <Form.Group controlId="formMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Your message" required />
                                    </Form.Group>
    
                                    <Button variant="primary" type="submit">
                                        Send Message
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
    
                        <Card style={{backgroundColor: "#f7dcb4", borderRadius: "5%"}}>
                            <Card.Body>
                                <h3 className="text-center">Our Contact Details</h3>
                                <ListGroup variant="flush" >
                                    <ListGroup.Item style={{backgroundColor: "#f7dcb4"}}><strong>Address:</strong> 123 Pizza Lane, Gore 9710, New Zealand</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: "#f7dcb4"}}><strong>Phone:</strong> (03) 355-9985</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: "#f7dcb4"}}><strong>Email:</strong> contact@simplysliced.com</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
    
                        <Card style={{backgroundColor: "#f7dcb4", borderRadius: "5%"}} className="my-4">
                            <Card.Body>
                                <h3 className="text-center">Find Us</h3>
                                <div className="map-container">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11064.26899988354!2d168.92956547888187!3d-46.10956692672453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snz!4v1723343981408!5m2!1sen!2snz" 
                                width="100%" 
                                height="300" 
                                style={{border:0}} 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    };
    return (
<ContactUsBody />
    )
}