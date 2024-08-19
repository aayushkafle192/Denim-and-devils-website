import React from 'react';
// import {useHistory} from 'react-router-dom';
import '../assets/cssFolder/contactus.css';
import Home from './home';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import dummyimage from '../assets/images/image.png';


const ContactUs: React.FC = () => {
    const navigate = useNavigate();

    const home = () => {
        navigate("/home");

    }

    return (

        <>
            <Navbar />

            <section className="contact-section">
                <div className="container">
                    {/* <button onClick={home} >
                        <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white">
                            {/* SVG Path */}
                    {/* <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                        </svg>
                    </button> */ }
                    <h1>Contact Us</h1>
                    <p>Need an expert? You are more than welcomed to leave your contact info and we will be in touch shortly</p>
                    <div className="contact-info">
                        <div className="info-box">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="40">
                                    {/* SVG Path */}
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z" />
                                </svg>
                            </div>
                            <h2>Visit Us</h2>
                            <p>Kathmandu, ranjana complex</p>
                        </div>
                        <div className="info-box">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="40">
                                    {/* SVG Path */}
                                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>
                            </div>
                            <h2>Call Us</h2>
                            <p>+977 (0) 9843076145</p>
                        </div>
                        <div className="info-box">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="40">
                                    {/* SVG Path */}
                                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                </svg>
                            </div>
                            <h2>Contact Us</h2>
                            <p>aayushkafle192@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="containermeet">
                <h1>Meet the brains</h1>
                <p>These people work on making our product best.</p>
                <div className="team">
                    <div className="team-member">
                        <img src={dummyimage} alt="Sam Monic" />
                        <h2>Sam Monic</h2>
                        <p className="role">Founder</p>
                        <p className="bio">I've established pagedone in 2022 and it was one of the best ideas I've had in my life.</p>
                       
                    </div>
                    <div className="team-member">
                        <img src={dummyimage} alt="Rams Lesli" />
                        <h2>Rams Lesli</h2>
                        <p className="role">Sales Executive</p>
                        <p className="bio">I'm the chief executive of sales and closed valuable deals that helped pagedone in growth.</p>
                        
                    </div>
                    <div className="team-member">
                        <img src={dummyimage} alt="Harshita Patel" />
                        <h2>Harshita Patel</h2>
                        <p className="role">Co-Founder & CEO</p>
                        <p className="bio">I am the co-founder of pagedone and we've pushed our limit so far to make it successful.</p>
                        
                    </div>
                    <div className="team-member">
                        <img src={dummyimage} alt="Alexa Kimberly" />
                        <h2>Alexa Kimberly</h2>
                        <p className="role">Lead Designer</p>
                        <p className="bio">I've been lead designer for pagedone since the beginning of it and enjoyed every bit.</p>
                        
                    </div>
                    <div className="team-member">
                        <img src={dummyimage} alt="Alexa Kimberly" />
                        <h2>Alexa Kimberly</h2>
                        <p className="role">Lead Designer</p>
                        <p className="bio">I've been lead designer for pagedone since the beginning of it and enjoyed every bit.</p>
                        
                    </div>

                    <div className="team-member">
                        <img src={dummyimage} alt="Alexa Kimberly" />
                        <h2>Alexa Kimberly</h2>
                        <p className="role">Lead Designer</p>
                        <p className="bio">I've been lead designer for pagedone since the beginning of it and enjoyed every bit.</p>
                       
                    </div>
                </div>
            </div>
            
            

        </>
    );
};

export default ContactUs;
