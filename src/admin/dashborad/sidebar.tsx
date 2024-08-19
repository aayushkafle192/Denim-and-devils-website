import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/cssFolder/sidebar.css';
import denimbg from '../../assets/images/DenimLogo-removebg-preview.png';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar1">
            <div className="logo-container">
                <img src={denimbg} alt="Company Logo" className="logo" height='15' />
            </div>
            <ul>
                <li><Link to="/dashboard/productform">Product</Link></li>
                <li><Link to="/dashboard/orderform">Order</Link></li>
                <li><Link to="/dashboard/services">Category</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
