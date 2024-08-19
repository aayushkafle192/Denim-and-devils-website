import React from 'react';
import '../assets/cssFolder/aboutus.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import denim from '../assets/images/denimnation.jpg';
import classic from '../assets/images/classicbold.jpg';

import main from '../assets/images/MainPicture.jpg';
import pant from '../assets/images/pantbg.jpg';
import dark from '../assets/images/darkbg.jpg';
import zero from '../assets/images/09.jpg';
import hanger from '../assets/images/hanger.jpg';
import black from '../assets/images/blacknation.jpg';
// import devilsbg from '../assets/images/devilsbgg.png';

const AboutUs: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>

            <Navbar />


            <section className="grid min-h-screen p-8 place-items-center">
                <div className="container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2 bg-zinc-100	">
                    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700  grid gap-2 item sm:grid-cols-2  	 	">
                        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0 shadow-blue-700	"><img src={denim} alt="Revolutionizing Our Production Process" className="object-cover w-full h-full" /></div>
                        <div className="p-6 px-2 sm:pr-6 sm:pl-4">
                            <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold text-orange-400	">Fabric</p><a href="#" className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700">Revolutionizing Our Production Process</a>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">Learn how our recent investment in new technology has revolutionized our production process, leading to improved efficiency and product quality.</p>
                            <div className="flex items-center gap-4"><img src="https://bucket.material-tailwind.com/magic-ai/6b1c5941d417a2a32baee89c2f3d1975d7d4fb81e486ed43dc1082ac54b0658b.jpg" className="inline-block relative object-cover object-center !rounded-full w-12 h-12 rounded-lg" />
                                <div>
                                    <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">Ghanashyam Kafle</p>
                                    <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">2022-08-15</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
                        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0  shadow-blue-700	"><img src={classic} alt="Expanding Our Service Network" className="object-cover w-full h-full" /></div>
                        <div className="p-6 px-2 sm:pr-6 sm:pl-4">
                            <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold text-orange-400	">Expansion</p><a href="#" className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700">Expanding Our  Network</a>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">We have expanded our branches in different part of the world</p>
                            <div className="flex items-center gap-4"><img src="https://bucket.material-tailwind.com/magic-ai/16d71aaeda38d7aea4412875984357949ff12e7f2c502bb20c4c1bcf6c661607.jpg" className="inline-block relative object-cover object-center !rounded-full w-12 h-12 rounded-lg" />
                                <div>
                                    <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">Kiran Khandel</p>
                                    <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">2022-09-02</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
                        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0  shadow-blue-700	"><img src={main} className="object-cover w-full h-full" /></div>
                        <div className="p-6 px-2 sm:pr-6 sm:pl-4">
                            <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold text-orange-400	">Quality Products</p><a href="#" className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700">Target quality rather then affordability</a>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">We work with the best production team in Chine to provide the quality products everyone desire.</p>
                            <div className="flex items-center gap-4"><img src="https://bucket.material-tailwind.com/magic-ai/2fadd7f00b6d08fc9dcacef52af357ec1213c0415ab97ace57ae0f17c7f6c2c8.jpg" className="inline-block relative object-cover object-center !rounded-full w-12 h-12 rounded-lg" />
                                <div>
                                    <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">Sushil belbase</p>
                                    <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">2022-09-20</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
                <article>
                    <h2 className="text-2xl font-extrabold text-gray-900">BLOG</h2>
                    <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                        <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                            style={{ backgroundImage: `url(${pant})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                <h3 className="text-center">
                                    <a className="text-white text-2xl font-bold text-center" href="#">
                                        <span className="absolute inset-0"></span>
                                        No.1 Denim pants dealer of Nepal
                                    </a>
                                </h3>
                            </div>
                        </article>
                        <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                            style={{ backgroundImage: `url(${dark})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                <h3 className="text-center">
                                    <a className="text-white text-2xl font-bold text-center" href="#">
                                        <span className="absolute inset-0"></span>
                                        Expirence work Staffs
                                    </a>
                                </h3>
                            </div>
                        </article>
                        <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                            style={{ backgroundImage: `url(${zero})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                <h3 className="text-center">
                                    <a className="text-white text-2xl font-bold text-center" href="#">
                                        <span className="absolute inset-0"></span>
                                        Focus on every variety of wearnings.
                                    </a>
                                </h3>
                            </div>
                        </article>
                    </section>
                </article>
            </section>


            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12  ">
                            <img src={black} alt="image" loading="lazy" width="" height="50" />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-orange-600	 font-bold md:text-4xl">Nuxt development is carried out by Exprence business workers</h2>
                            <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                            <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                        </div>
                    </div>
                </div>
            </div>





           




            <div className="container">
                {/* <header className="headerA">
                    <h1>About Us</h1>
                   
                    
                </header> */}
                <div className="content1">
                    <div className="text-section">
                        <h2>Our Vision</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.</p>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and</p>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                    </div>
                    <div className="image-section image-section1">
                        <img src="09.jpg" alt="" />
                    </div>
                </div>
                <div className="content1">
                    <div className="image-section image-section2">
                        <img className="second" src="87.jpg" alt="" />
                    </div>
                    <div className="text-section">
                        <h2>Our Mission</h2>
                        <p>We strive to bring the best of fashion and comfort to our customers. Our mission is to create a space where style meets ease, and where every piece of clothing tells a story of passion and creativity.</p>
                        <p>Each collection is crafted with care, reflecting the unique blend of modern trends and timeless elegance. We believe in sustainable fashion, ensuring our products are not only stylish but also environmentally friendly.</p>
                        <p>Join us in our journey to redefine fashion, one outfit at a time.</p>
                    </div>
                </div>
                <div className="content1">
                    <div className="text-section">
                        <h2>Our Values</h2>
                        <p>Our values are rooted in authenticity, innovation, and integrity. We believe in creating products that not only look good but also feel good. Our commitment to quality and sustainability is reflected in every piece we create.</p>
                        <p>We are dedicated to pushing the boundaries of fashion, continuously exploring new styles and materials to bring our customers the best. Our values guide us in every decision we make, ensuring we stay true to our mission and vision.</p>
                        <p>Join us as we continue to grow and evolve, staying true to our core values every step of the way.</p>
                    </div>
                    <div className="image-section image-section3">
                        <img className="third" src="sandeep.jpg" alt="" />
                    </div>
                </div>
               
            </div>

            {/* ya bata */}

            



        </>

    );
};

export default AboutUs;
