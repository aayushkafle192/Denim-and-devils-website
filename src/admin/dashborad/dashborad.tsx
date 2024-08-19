import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../dashborad/sidebar';
import Topbar from '../dashborad/topbar';
import '../../assets/cssFolder/dashboard.css'

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <Topbar />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
