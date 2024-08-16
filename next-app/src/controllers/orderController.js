
import orders from "../data/Orders.json";

export async function getOrders(status) {
    try {
        if (status) {
            return orders.filter(item => item.status === status);
        }
        return orders;
    } catch (error) {
        throw new Error('Failed to retrieve orders');
    }
}

export async function addOrder(newData) {
    try {
        orders.push(newData);
        return newData;
    } catch (error) {
        throw new Error('Failed to add new order');
    }
}

export async function updateOrder(id, newData) {
    try {
        const itemIndex = orders.findIndex(item => item.id === id);

        if (itemIndex === -1) {
            throw new Error('Item not found');
        }

        orders[itemIndex] = { ...orders[itemIndex], ...newData };
        return { message: 'Item updated successfully' };
    } catch (error) {
        throw new Error(error.message || 'Failed to update order');
    }
}

export async function deleteOrder(id) {
    try {
        const orderIndex = orders.findIndex(order => order.id === id);

        if (orderIndex === -1) {
            throw new Error('Order not found');
        }

        const [deletedOrder] = orders.splice(orderIndex, 1);
        return deletedOrder;
    } catch (error) {
        throw new Error(error.message || 'Failed to delete order');
    }
}
