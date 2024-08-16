'use client'
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function About() {

    const AboutBody = () => {  const sections = [
        { title: 'Welcome to Simply Sliced!', content: 'At Simply Sliced, we believe that great pizza doesn\'t have to be complicated. Our mission is to create delicious, high-quality pizzas using fresh, simple ingredients that speak for themselves. We\'re dedicated to the art of making pizza the way it\'s meant to be—simple, straightforward, and always satisfying.' },
        { title: 'Our Philosophy', content: 'We keep things simple so you can enjoy every bite. Our approach is rooted in the belief that the best pizza is made with care and attention to the fundamentals. By focusing on a few core ingredients and perfecting each one, we bring you a pizza experience that\'s both authentic and delightful.' },
        { title: 'Our Ingredients', content: 'We start with the basics: fresh dough, flavorful sauces, and premium toppings. Our dough is made daily, ensuring a light, airy crust that\'s the perfect canvas for our high-quality ingredients. Our sauces are crafted from ripe tomatoes and seasoned just right, and our toppings are carefully selected to enhance the natural flavors of each pie. No gimmicks, just great ingredients working in harmony.' },
        { title: 'Our Process', content: 'From the moment you step into our pizzeria, you\'ll notice the difference. Our team is passionate about pizza and dedicated to maintaining a high standard of quality. Each pizza is hand-tossed and baked to perfection in our state-of-the-art ovens. We believe that taking the time to get it right results in a pizza that\'s always worth savoring.' },
        { title: 'Our Promise', content: 'At Simply Sliced, we promise to deliver a pizza that\'s as simple as it is extraordinary. We\'re committed to making every visit a great one, whether you\'re grabbing a quick slice or enjoying a meal with friends and family. Your satisfaction is our top priority, and we\'re always here to make sure you leave with a smile.' },
    ];

    return (
        <Container fluid className="text-center p-4" style={{ backgroundColor: 'transparent'}}>
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                <h2 className="text-center">About Us</h2>
                    {sections.map((section, index) => (
                        <Card key={index} className="my-3 border" style={{ backgroundColor: "#f7dcb4", borderRadius: "5%"}}>
                            <Card.Body>
                                <Card.Title>{section.title}</Card.Title>
                                <Card.Text>{section.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

    return (
            <AboutBody />
    );
}
