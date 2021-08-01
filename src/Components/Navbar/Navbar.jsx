import React from 'react';
import "./Navbar.css";

import Logo from "./logo.svg";

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className="Navbar-nav">
                <div className="Navbar-brand">
                    <img src={Logo} alt="logo" className="Navbar-logo" />
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">New Editor</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Guide</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-link-logout" href="#">Log Out</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
