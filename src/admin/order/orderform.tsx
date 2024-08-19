import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderForm: React.FC = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const submit = (data: any) => {
        console.log(data);
        axios.post("http://localhost:8087/order/save", data).then(res => {
            toast.success("Order successfully saved!", {});
            navigate("/dashboard/orderindex");
        }).catch(err => {
            toast.error("Failed to save order.");
            console.error(err);
        });
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="orderDate">Order Date:</label>
                <input
                    type="datetime-local"
                    id="orderDate"
                    {...register("orderDate")}
                />
            </div>
            <div>
                <label htmlFor="status">Status:</label>
                <input
                    type="text"
                    id="status"
                    {...register("status")}
                />
            </div>
            <div>
                <label htmlFor="total">Total Amount:</label>
                <input
                    type="number"
                    id="total"
                    step="0.01"
                    {...register("total")}
                />
            </div>
            <div>
                <label htmlFor="signupId">Signup ID:</label>
                <input
                    type="number"
                    id="signupId"
                    {...register("signupId")}
                />
            </div>
            <div>
                <label htmlFor="productId">Product ID:</label>
                <input
                    type="number"
                    id="productId"
                    {...register("productId")}
                />
            </div>
            <button type="submit" >Save Order</button>
        </form>
    );
}

export default OrderForm;
