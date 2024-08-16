
import OrderList from "@/components/OrderList/OrderList";

export default async function OrdersPage() {
   
    const fetchOrders = async () => {
        const data = await fetch('http://localhost:3000/api/orders', { cache: "no-store" }).then((res) => res.json());
        return data
    };

    try {
        const orders = await fetchOrders();

        return (
            <div>
                <h1>Orders List</h1>
                <OrderList initialOrders={orders} />
            </div>
        );
    } catch (error) {
        return (
            <div>
                <h1>Error</h1>
                <p>Failed to load orders: {error.message}</p>
            </div>
        );
    }
}
