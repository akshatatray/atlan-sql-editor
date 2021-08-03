import React from 'react';
import "./Sidebar.css";

import Account from './account.svg';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <ul className="Sidebar-nav">
                <li className="Sidebar-navItem">
                    <a
                        href="https://www.linkedin.com/in/akshat-atray-833a121ab/"
                        target="_blank"
                        rel="noreferrer"
                        className="Sidebar-navLink"
                    >
                        <img src={Account} className="Sidebar-Icn" alt="Account" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
