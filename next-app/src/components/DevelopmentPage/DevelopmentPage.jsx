import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import Link from 'next/link';

export default function DevelopmentPage() {
      
    return (
        <Container fluid className="text-center">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="my-5 border" style={{ backgroundColor: '#f7dcb4', borderRadius: "5%" }}>
                        <Card.Body>
                            <Card.Img style={{ height: "300px", width: "auto" }} src="http://localhost:3000/images/development.png" alt='Under Development' />
                            <Card.Title style={{ fontSize: "2rem" }}>Under Development</Card.Title>
                            <Card.Text>
                                        This slice needs a bit longer to develop! We're
                                        busy perfecting the recipe to serve you something truely amazing!
                                        <br />
                                        Please check back soon, or <Link href="/" className="text-primary">return to the homepage</Link> for the latest updates.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}