import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import '../../assets/cssFolder/categoryform.css'; // Make sure to include the CSS file

// Fetch a single category for editing
const fetchCategory = async (id: number) => {
    const response = await axios.get(`http://localhost:8087/category/get/${id}`);
    return response.data.data;
};

// Save or update a category
const saveOrUpdateCategory = async (category: any) => {
    if (category.id) {
        await axios.post("http://localhost:8087/category/save", category);
    } else {
        await axios.post("http://localhost:8087/category/save", category);
    }
};

const CategoryForm: React.FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // Fetch category data if id exists
    const { data: category } = useQuery({
        queryKey: ["GET_CATEGORY_BY_ID", id],
        queryFn: () => fetchCategory(Number(id)),
        enabled: !!id // Fetch only if id is not null
    });

    const mutation = useMutation({
        mutationFn: saveOrUpdateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries(["GET_CATEGORY_API_CALL"]);
            navigate("/dashboard/categoryindex");
        }
    });

    useEffect(() => {
        if (category) {
            setName(category.name);
            setDescription(category.description);
        }
    }, [category]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const categoryData = { id: id ? Number(id) : undefined, name, description };
        mutation.mutate(categoryData);
    };

    return (
        <div className="category-form-container">
            <h1>{id ? "Edit Category" : "Add New Category"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Save</button>
                <button type="button" className="cancel-btn" onClick={() => navigate("/dashboard/categoryindex")}>Cancel</button>
            </form>
        </div>
    );
};

export default CategoryForm;
