"use client";

import { useState } from 'react';
import  Button  from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

export default function OrderList({ initialOrders }) {
    const [orders, setOrders] = useState(initialOrders);

    const filterOrders = (status) => {
        const filteredOrders = initialOrders.filter(item =>
            status == 'All' || item.status == status
        );
        setOrders(filteredOrders);
    };
    return (
        <div id="orders-container">
            <div>
                <Button style={{ margin: "5px" }} variant="secondary" onClick={() => filterOrders('new')}>New Orders</Button>
                <Button style={{ margin: "5px" }} variant="secondary" onClick={() => filterOrders('complete')}>Completed Orders</Button>
                <Button style={{ margin: "5px" }} variant="secondary" onClick={() => filterOrders('cancelled')}>Cancelled Orders</Button>
                <Button style={{ margin: "5px" }} variant="secondary" onClick={() => filterOrders('All')}>All Orders</Button>
            </div>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
                {orders.map((order) => (
                    <Accordion.Item eventKey={order.id} key={order.id}>
                        <Accordion.Header>Order ID: {order.id} &nbsp;&nbsp;&nbsp;&nbsp; Name: {order.customerName}</Accordion.Header>
                        <Accordion.Body>
                            <ul style={{ listStyleType: "none" }}>
                                <li>Pizza: {order.pizzaType}</li>
                                <li>Base: {order.baseType}</li>
                                <li>Quantity: {order.quantity}</li>
                                <li>Sides: {Array.isArray(order.sides) ? order.sides.join(', ') : 'None'}</li>
                                <li>Drink: {order.drink || 'None'}</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}
