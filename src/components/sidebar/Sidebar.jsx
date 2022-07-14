import React from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">myadmin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to='/users' style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonOutlineIcon />
                            <span>Users</span>
                        </li>
                    </Link>
                    <li>
                        <StoreIcon />
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCardIcon />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon />
                        <span>Stats</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartIcon />
                        <span>Delivery</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar