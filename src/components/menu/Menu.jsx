import {Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu() {
    const pizzaData = [
      {
        "name": "Cheese",
        "price": "$23.50",
        "image": "/images/cheese.png",
        "outOfStock": false
      },
      {
        "name": "Mushroom",
        "price": "$25.50",
        "image": "/images/mushrooms.png",
        "outOfStock": true
      },
      {
        "name": "Aubergine",
        "price": "$24.50",
        "image": "/images/eggplant.png",
        "outOfStock": false
      },
      {
        "name": "Pepperoni",
        "price": "$26.50",
        "image": "/images/pepperonies.png",
        "outOfStock": false
      },
      {
        "name": "Olive",
        "price": "$24.50",
        "image": "/images/olives.png",
        "outOfStock": true
      },
      {
        "name": "Tomato",
        "price": "$23.50",
        "image": "/images/tomatoes.png",
        "outOfStock": false
      }
    ];
  
    return (
      <div className="pizza-grid">
        {pizzaData.map((pizza, index) => (
            <div key={index}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pizza.image} alt={`${pizza.name} Pizza`} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Text>
              {pizza.price}
              </Card.Text>
              <Button variant="primary" disabled={pizza.outOfStock}>{pizza.outOfStock ? 'Out of Stock' : 'Add to Order'}</Button>
            </Card.Body>
          </Card>
          </div>
        ))}
      </div>
    );
  }