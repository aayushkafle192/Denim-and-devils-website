import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../../assets/cssFolder/ProductForm.css';

const ProductForm: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id?: string }>(); // Get the id from the URL parameters
    const { register, handleSubmit, setValue, reset } = useForm();

    // Fetch product data if id is present (for editing)
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8087/product/get/${id}`)
                .then(res => {
                    const product = res.data.data; // Assuming data is under the "data" property
                    setValue('name', product.name);
                    setValue('description', product.description);
                    setValue('price', product.price);
                    setValue('stock', product.stock);
                })
                .catch(error => {
                    toast.error(`Error fetching product: ${error}`);
                });
        } else {
            // Reset form values if no ID (creating a new product)
            reset();
        }
    }, [id, setValue, reset]);

    const submit = (data: any) => {
        const request = id
            ? axios.put(`http://localhost:8087/product/update/${id}`, { id, ...data }) // Update if id is present
            : axios.post("http://localhost:8087/product/save", data); // Create if no id

        request
            .then(() => {
                toast.success(`Product ${id ? 'updated' : 'saved'} successfully`);
                navigate("/dashboard/productindex");
            })
            .catch(error => {
                toast.error(`Error ${id ? 'updating' : 'saving'} product: ${error}`);
            });
    };

    return (
        <form onSubmit={handleSubmit(submit)} className="product-form">
            <div>
                <label htmlFor="name">Product Name:</label>
                <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Product name is required" })}
                />
            </div>
            <div>
                <label htmlFor="description">Product Description:</label>
                <textarea
                    id="description"
                    {...register("description", { required: "Product description is required" })}
                />
            </div>
            <div>
                <label htmlFor="price">Product Price:</label>
                <input
                    type="number"
                    id="price"
                    {...register("price", { required: "Product price is required" })}
                />
            </div>
            <div>
                <label htmlFor="stock">Product Stock:</label>
                <input
                    type="number"
                    id="stock"
                    {...register("stock", { required: "Product stock is required" })}
                />
            </div>
            <button className='btnform' type="submit">
                {id ? 'Update Product' : 'Save Product'}
            </button>
        </form>
    );
};

export default ProductForm;
