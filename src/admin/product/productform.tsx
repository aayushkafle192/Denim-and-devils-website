import React, { useState } from 'react';
import '../../assets/cssFolder/ProductForm.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProductForm: React.FC = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm()


    const submit = (data: any) => {
        console.log(data)

        axios.post("http://localhost:8087/product/save", data).then(res => {
            toast.success("Sussessfully saved the data  ", {

            });
            navigate("/dashboard/productindex")

        })
    }


    
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="name">Product Name:</label>
                <input
                    type="text"
                    id="name"
                
                    {...register("name")}

                    
                />
            </div>
            <div>
                <label htmlFor="description">Product Description:</label>
                <textarea
                    id="description"
                    
                    {...register("description")}
                    
                  
                />
            </div>
            <div>
                <label htmlFor="price">Product Price:</label>
                <input
                    type="number"
                    id="price"
                    {...register("price")}


                    
                />
            </div>
            <div>
                <label htmlFor="stock">Product Stock:</label>
                <input
                    type="number"
                    id="stock"
                    {...register("stock")}

                   
                />
            </div>
            <button className='btnform' type="submit">Save Product</button>
        </form>
    );
};

export default ProductForm;
