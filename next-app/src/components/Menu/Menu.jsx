import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './menu.css';
import pizzas from "../../data/pizzas.json";
import { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function Menu() {
    const [pizzaData, setPizzaData] = useState(pizzas);

    const VeganFilter = () => {
        const veganPizzas = pizzas.filter(pizza => pizza.vegan);
        setPizzaData(veganPizzas);
    }
    const GlutenFreeFilter = () => {
        const glutenFreePizzas = pizzas.filter(pizza => pizza.glutenFree);
        setPizzaData(glutenFreePizzas);
    }

    const ResetFilter = () => {
        setPizzaData(pizzas)
    }

    const PizzaGrid = () => {
        return pizzaData.map((pizza, index) => (
            <Card className="pizza-grid-item .bg-transparent" key={index}>
                <Card.Img 
                className="card-image" 
                variant="top" 
                src={pizza.image}
                alt={`${pizza.name} Pizza`} 
                style={{ width: "10rem", height: '10rem' }} 
                />
                <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                        {pizza.price}
                    </Card.Text>
                    <Button className="order-button" disabled={pizza.outOfStock}>
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
    ]
    
const FilterDropdown = () => {
    return( 
        <DropdownButton variant="Secondary" title="Filter">
                    {dropdownOptions.map((option, index) => (
                        <Dropdown.Item key={index} onClick={option.action}>
                            {option.label}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
    )}

        return (
            <div className="text-center">
                <h1>Our Menu</h1>
                <FilterDropdown />
            <div className="pizza-grid">
                <PizzaGrid />
            </div>
            </div>
    );
}
