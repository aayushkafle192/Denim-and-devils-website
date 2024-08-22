import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../assets/cssFolder/productindex.css';

// Fetch products from the backend
const fetchProducts = async () => {
    const response = await axios.get("http://localhost:8087/product/get");
    return response.data.data; // Access the data property which holds the array
};

// Delete product
const deleteProduct = async (id: number) => {
    await axios.delete(`http://localhost:8087/product/delete/${id}`);
};

const ProductIndex: React.FC = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient(); // Access query client to refetch data
    const { data, error, isLoading } = useQuery({
        queryKey: ["GET_PRODUCTS"],
        queryFn: fetchProducts,
    });

    const mutation = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            // Refetch the products after successful deletion
            queryClient.invalidateQueries(["GET_PRODUCTS"]);
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {String(error)}</div>;

    const handleDelete = (id: number) => {
        mutation.mutate(id);
    };

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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button onClick={() => navigate(`/dashboard/productform/${product.id}`)}>Edit</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='aa' onClick={() => navigate("/dashboard/productform")}>Add New </button>
        </div>
    );
};

export default ProductIndex;
