import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';
import pizzas from "../../data/pizzas.json";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import BasicExample from "../dropdown/BasicDropdown";
import BasicDropdown from "../dropdown/BasicDropdown";

export default function Menu() {
    const [pizzaData, setPizzaData] = useState(pizzas);

    const VeganFilter = () => {
        const veganPizzas = pizzas.filter(pizza => pizza.vegan); // Assuming `vegan` is a boolean property in your pizza data
        setPizzaData(veganPizzas);
    }
    const GlutenFreeFilter = () => {
        const glutenFreePizzas = pizzas.filter(pizza => pizza.glutenFree); // Assuming `vegan` is a boolean property in your pizza data
        setPizzaData(glutenFreePizzas);
    }

    const ResetFilter = () => {
        setPizzaData(pizzas)
    }

    const PizzaGrid = () => {
        return pizzaData.map((pizza, index) => (
            <Card className="pizza-grid-item" style={{ width: '12rem' }} key={index}>
                <Card.Img variant="top" src={pizza.image} alt={`${pizza.name} Pizza`} style={{ width: "10rem" }} />
                <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                        {pizza.price}
                    </Card.Text>
                    <Button variant="primary" disabled={pizza.outOfStock}>
                        {pizza.outOfStock ? 'Out of Stock' : 'Add to Order'}
                    </Button>
                </Card.Body>
            </Card>
        ));
    }

    const dropdownOptions = [
        { label: 'Vegan', action: VeganFilter },
        { label: 'Gluten Free', action: GlutenFreeFilter },
        { label: 'Reset', action: ResetFilter },
    ];

    return (
        <div className="text-center">
            <h1 >Our Menu</h1>
            <BasicDropdown title="Filter" options={dropdownOptions} />
            <div className="pizza-grid">
                <PizzaGrid />
            </div>
        </div>
    );
}
