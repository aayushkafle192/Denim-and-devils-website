import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import '../../assets/cssFolder/categoryindex.css'; // Make sure to include the CSS file

const fetchCategories = async () => {
    const response = await axios.get("http://localhost:8087/category/get");
    return response.data.data;
};

const deleteCategory = async (id: number) => {
    await axios.delete(`http://localhost:8087/category/delete/${id}`);
};

const CategoryIndex: React.FC = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { data, error, isLoading } = useQuery({
        queryKey: ["GET_CATEGORY_API_CALL"],
        queryFn: fetchCategories
    });

    const mutation = useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries(["GET_CATEGORY_API_CALL"]);
        }
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {String(error)}</div>;

    const categories = Array.isArray(data) ? data : [];

    const handleDelete = (id: number) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            mutation.mutate(id);
        }
    };

    return (
        <div className="category-index-container">
            <h1>Category List</h1>
            <table className="category-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td>
                                <button className="edit-btn" onClick={() => navigate(`/dashboard/categoryform/${category.id}`)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(category.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="add-btn" onClick={() => navigate("/dashboard/categoryform")}>Add New Category</button>
        </div>
    );
};

export default CategoryIndex;
