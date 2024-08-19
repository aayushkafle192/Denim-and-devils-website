import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/cssFolder/signup.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { nation } from '../assets/images/denimnation.jpg';

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm()
    

    const submit = (data: any) => {
        console.log(data)

        axios.post("http://localhost:8087/api/save", data).then(res => {
            toast.success("Sign up  Succesful", {
                
            });
            navigate("/login")
            
        })
    }
    



    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-200" style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' }}>
            <div className="relative flex w-4/5 h-[90vh] bg-white shadow-lg rounded-3xl overflow-hidden">
                < div className="w-1/2 bg-[#E77323] flex flex-col justify-between">

                    <div className="backgroundImage" />

                </div>
                <div className="w-1/2 flex flex-col items-center justify-center bg-white p-10">
                    <div className="w-full max-w-md">
                        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
                        <form className="space-y-4"  onSubmit={handleSubmit(submit)}>
                            <input type="text" placeholder="Full Name" 
                                {...register("fullname")}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="fullname" />
                            <input type="email" placeholder="Email Address"
                                {...register("email")}
                                
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="email" />
                            <input type="password" placeholder="Password"
                                {...register("password")}
                                
                                
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="password" />
                            <div className="flex items-center">
                                <input type="checkbox" id="terms" name="terms" className="mr-2" />
                                <label htmlFor="terms" className="text-sm text-gray-600">I agree to the <span className="text-blue-500">terms of service</span> and <span className="text-blue-500">privacy policy</span></label>
                            </div>
                            <button className="w-full py-2 mt-6 bg-orange-500 text-white rounded-lg hover:bg-yellow-700">Sign Up</button>
                        </form>
                        

                        <div className="flex items-center my-6">
                            <hr className="flex-grow border-gray-300" />
                            <span className="px-4 text-gray-500">or sign up with</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="text-blue-500"><i className="fab fa-google text-2xl"></i></a>
                            <a href="#" className="text-blue-500"><i className="fab fa-facebook-f text-2xl"></i></a>
                            <a href="#" className="text-blue-500"><i className="fab fa-github text-2xl"></i></a>
                            <a href="#" className="text-blue-500"><i className="fab fa-linkedin-in text-2xl"></i></a>
                        </div>
                        <div className="mt-6 text-center">
                            {/* Use Link component for navigation */}
                            <p className="text-gray-600">Already have an account? <Link to="/login" className="text-blue-500">Sign in</Link></p>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 w-1/2 h-full bg-[#d1d1d1] clip-path-separator"></div>
            </div>
        </div>
    );
}

export default Signup;
