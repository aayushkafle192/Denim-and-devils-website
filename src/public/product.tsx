import React from 'react';
import '../assets/cssFolder/product.css';
import  diamond from '../assets/images/98.jpg'
import Navbar from './Navbar';
const Product: React.FC = () => {
    return (
        <>
            <Navbar/>
            <header>
                <div className="diagonal-box"></div>
                <h1>Denim and Devils</h1>
            </header>

            <main>
                <div className="products-header">
                    <span>All Products</span>
                </div>

                <div className="products-grid">
                    <div className="product-item">
                        <img src={diamond} alt="Military Backpack" />
                        <h3>Military Backpack</h3>
                        <p>$35.00</p>
                        <p>Model:#4050</p>
                    </div>
                    <div className="product-item">
                        <img src={diamond} alt="Liquid Umoro Ginger Lily" />
                        <h3>Liquid Umoro Ginger Lily</h3>
                        <p className="sale">$35.00 <span className="original-price">$41.00</span></p>
                        <p>Model:#4050</p>
                    </div>
                    <div className="product-item">
                        <img src={diamond} alt="D&G Wood Sunglass" />
                        <h3>D&G Wood Sunglass</h3>
                        <p>$15.00</p>
                        <p>Model:#4050</p>
                    </div>
                    <div className="product-item">
                        <img src={diamond} alt="Saved Wines Corkscrew" />
                        <h3>Saved Wines Corkscrew</h3>
                        <p>$105.00</p>
                        <p>Model:#4050</p>
                    </div>
                    <div className="product-item">
                        <img src={diamond} alt="Wood Long TV Board" />
                        <h3>Wood Long TV Board</h3>
                        <p>$920.00</p>
                        <p>Model:#4050</p>
                    </div>
                    <div className="product-item">
                        <img src={diamond} alt="Simple Fabric Chair" />
                        <h3>Simple Fabric Chair</h3>
                        <p>$65.00</p>
                        <p>Model:#4050</p>
                    </div>
                    <div className="product-item">
                        <img src={diamond} alt="Rovane Candle" />
                        <h3>Rovane Candle</h3>
                        <p>$25.00</p>
                        <p>Model:#4050</p>
                    </div>
                    <div className="product-item">
                        <img src={diamond} alt="Simple Fabric Bags" />
                        <h3>Simple Fabric Bags</h3>
                        <p>$75.00</p>
                        <p>Model:#4050</p>
                    </div>
                    <div className="product-item">
                        <img src={diamond} alt="Wood Simple Clock" />
                        <h3>Wood Simple Clock</h3>
                        <p className="sale">$95.00 <span className="original-price">$120.00</span></p>
                        <p>Model:#4050</p>
                    </div>
                </div>
            </main>

            <footer>
                <div className="footer-links">
                    <a href="#">Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Affiliates</a>
                    <a href="#">Help</a>
                </div>
                <p>© 2024 Unero. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Product;
