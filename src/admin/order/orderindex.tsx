import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/cssFolder/orderindex.css'; // Add your CSS file for styling

// Fetch orders from the backend
const fetchOrders = async () => {
    const response = await axios.get("http://localhost:8087/order/get");
    return response.data.data; // Access the data property which holds the array
};

const OrderIndex: React.FC = () => {
    const navigate = useNavigate();

    const { data, error, isLoading } = useQuery({
        queryKey: ["GET_ORDER_API_CALL"],
        queryFn: fetchOrders
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {String(error)}</div>;

    // Ensure data is an array
    const orders = Array.isArray(data) ? data : [];

    return (
        <div className="order-index-container">
            <h1>Order List</h1>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Signup ID</th>
                        <th>Product ID</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.ID}>
                            <td>{order.ID}</td>
                            <td>{order.Orderdate}</td>
                            <td>{order.Status}</td>
                            <td>{order.Total}</td>
                            <td>{order.Signup_id}</td>
                            <td>{order.Product_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => navigate("/orderform")}>Add New Order</button>
        </div>
    );
};

export default OrderIndex;
