import React from 'react';

import '../assets/cssFolder/services.css';
import Navbar from './Navbar';

const Service = () => {
    return (
        <>
            <Navbar />
            <section className="p-0 lg:p-0">
                <div className="container3 bg-yellow-500		">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-4">
                            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                               
                                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4  mt-2.5	">
                                    What We Offer
                                </h2>
                                <p className="text-base text-body-color">
                                    There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                                <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                        aria-label="Icon description"
                                        role="img"
                                    >
                                        <path d="M320 64c14.4 0 22.3-7 30.8-14.4C360.4 41.1 370.7 32 392 32c49.3 0 84.4 152.2 97.9 221.9C447.8 272.1 390.9 288 320 288s-127.8-15.9-169.9-34.1C163.6 184.2 198.7 32 248 32c21.3 0 31.6 9.1 41.2 17.6C297.7 57 305.6 64 320 64zM111.1 270.7c47.2 24.5 117.5 49.3 209 49.3s161.8-24.8 208.9-49.3c24.8-12.9 49.8-28.3 70.1-47.7c7.9-7.9 20.2-9.2 29.6-3.3c9.5 5.9 13.5 17.9 9.9 28.5c-13.5 37.7-38.4 72.3-66.1 100.6C523.7 398.9 443.6 448 320 448s-203.6-49.1-252.5-99.2C39.8 320.4 14.9 285.8 1.4 248.1c-3.6-10.6 .4-22.6 9.9-28.5c9.5-5.9 21.7-4.5 29.6 3.3c20.4 19.4 45.3 34.8 70.1 47.7z" />
                                    </svg>
                                    {/* SVG icon */}
                                </div>
                                <h4 className="font-semibold text-xl text-dark mb-3">
                                    Refreshing Design
                                </h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                                <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                        aria-label="Icon description"
                                    >
                                        <path d="M36.8 192l566.3 0c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0L121.7 0c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224l0 160 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-80 0-160-64 0 0 160-192 0 0-160-64 0zm448 0l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256-64 0z" />
                                    </svg>
                                    {/* SVG icon */}
                                </div>
                                <h4 className="font-semibold text-xl text-dark mb-3">
                                    Based on Tailwind CSS
                                </h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                                <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                        aria-label="Icon description"
                                    >
                                        <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z" />
                                    </svg>
                                    
                                    {/* SVG icon */}
                                </div>
                                <h4 className="font-semibold text-xl text-dark mb-3">
                                    Modern Framework
                                </h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>








            







        <div className="container2">
            <section className="services">
                <h2>AREAS WHAT WE SERV</h2>
                <h1>Our Services</h1>
                <div className="service-cards">
                    <div className="card">
                        <div className="icon">🔧</div>
                        <h3>Corporate Solution</h3>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old.
                        </p>
                    </div>
                    <div className="card">
                        <div className="icon">📞</div>
                        <h3>Call Center Solutions</h3>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old.
                        </p>
                    </div>
                    <div className="card">
                        <div className="icon">☁️</div>
                        <h3>Quality Manufracturing</h3>
                        <p>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by
                            injected humour, or randomised words.
                        </p>
                    </div>
                    <div className="card">
                        <div className="icon">📱</div>
                        <h3>Formal as well as Street wears</h3>
                        <p>
                            Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed
                            magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem.
                        </p>
                    </div>
                    <div className="card">
                        <div className="icon">📲</div>
                        <h3>High customer satisfiction</h3>
                        <p>
                            Cras ultricies ligula sed magna dictum porta. Vivamus magna justo,
                            lacinia eget consectetur sed, convallis at tellus. Curabitur
                            aliquet quam id dui posuere blandit.
                        </p>
                    </div>
                    <div className="card">
                        <div className="icon">🎨</div>
                        <h3>Premium range</h3>
                        <p>
                            Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Pellentesque in ipsum id
                            orci porta dapibus. Proin eget tortor risus.
                        </p>
                    </div>
                </div>
            </section>
            <section className="why-choose-us">
                <h2>SOME REASONS</h2>
                <h1>Why Choose Us</h1>
                <div className="reasons">
                    <div className="reason">
                        <h3>01 — High Quality</h3>
                    </div>
                    <div className="reason">
                        <h3>02 — Dedicated 24/7</h3>
                    </div>
                    <div className="reason">
                        <h3>03 — 30-Day Money-back</h3>
                    </div>
                </div>
            </section>
            </div>


            <footer className="blue-footer rounded-lg    bg-slate-700	 w-full	 mt-2 mx-px	h-32		">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://www.facebook.com/denimanddevils/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white  text-orange-300	text-2xl	">Denim and Devils</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6 text-orange-300	text-base		">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6 text-orange-300	text-base	">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6 text-orange-300	text-base	">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline text-orange-300	text-base		">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm  sm:text-center dark:text-gray-400 text-white text-lg		">© 2023 <a href="https://www.facebook.com/denimanddevils/" className="hover:underline text-white text-lg	">Denim and Devils™</a>. All Rights Reserved.</span>
                </div>
            </footer>
           


            </>
    );
};

export default Service;
