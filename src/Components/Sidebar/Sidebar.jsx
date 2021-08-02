import React from 'react';
import "./Sidebar.css";

import Account from './account.svg';
import Download from './download.svg';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <ul className="Sidebar-nav">
                <li className="Sidebar-navItem">
                    <a href="#" className="Sidebar-navLink">
                        <img src={Download} className="Sidebar-Icn" alt="Download" />
                    </a>
                </li>
                <li className="Sidebar-navItem">
                    <a href="#" className="Sidebar-navLink">
                        <img src={Account} className="Sidebar-Icn" alt="Account" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
