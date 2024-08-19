import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../assets/cssFolder/productindex.css'; // Add your CSS file for styling

const fetchProducts = async () => {
    const response = await axios.get("http://localhost:8087/product/get");
    return response.data.data; // Access the data property which holds the array
};

const ProductIndex: React.FC = () => {
    const navigate = useNavigate(); // Hook for navigation
    const { data, error, isLoading } = useQuery({
        queryKey: ["GET_API_CALL"],
        queryFn: fetchProducts
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {String(error)}</div>;
    

    // Ensure data is an array
    const products = Array.isArray(data) ? data : [];

    return (
        <div className="product-index-container">
            <h1>Product List</h1>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => navigate('/dashboard/productform')}>Back </button>
        </div>
    );
};

export default ProductIndex;
