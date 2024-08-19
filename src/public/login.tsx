import React, { useEffect, useState } from 'react';
import '../assets/cssFolder/login.css';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { TbPasswordMobilePhone } from 'react-icons/tb';
import axios from 'axios';
import { toast } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (localStorage.getItem("id")) {
    //         window.location.href="/home"
    //     }
    // }, [])
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, TbPasswordMobilePhone)
        

        const payload = { email, password }
        axios.post("http://localhost:8087/api/login", payload).then(res => {
            if (res?.data == "") {
                
                if (res?.data == 0) {
                    // localStorage.setItem("id", res?.data)
                    window.location.href="/admin"
                }
            }
            else {
            
                toast.success("Login successful", {
                    
                });
                // 
                navigate("/home")
            }
        })
    }
    





    return (
        <div className="main">
            <div className="left">
                {/* <div className="top">
                    <p>Expirence the best quality with affordability</p>
                </div>
                <div className="bottom"></div> */}
            </div>
            <div className="right">
                <div className="main1">
                    <div className="signin">
                        <h2>Login</h2>
                    </div>
                    <div className="form">
                        <form onSubmit={handleLogin}>
                            <input type="text" placeholder="Email Address" className="input-field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-label='email'
                            
                            />
                            <input type="text" placeholder="password" className="input-field"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-label='password'
                                
                            
                            />
                            <a href="#">forget your password?</a>
                            <div className="signupbutton">
                                <button>Login</button>
                            </div>
                        </form>
                       
                    </div>
                    
                    <div className="down">
                        <div className="box1">
                            <div className="line1">
                                <hr />
                            </div>
                            <div className="middle">
                                <p>or sign in with</p>
                            </div>
                            <div className="line2">
                                <hr />
                            </div>
                        </div>
                        <div className="box2">
                            <div className="logo1">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 256 262">
                                        <path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
                                        <path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
                                        <path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" />
                                        <path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
                                    </svg>
                                </a>
                            </div>
                            <div className="logo2">
                                <a href="#"><FaFacebookF /></a>
                            </div>
                            <div className="logo3">
                                <a href="#"><FaGithub /></a>
                            </div>
                            <div className="logo4">
                                <a href="#"><FaLinkedinIn /></a>
                            </div>
                        </div>
                        <div className="box3">
                            <div className="part1">
                                <p>New to our website?</p>
                                <Link to="/signup">Sign up</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
