import React from 'react';
import "./Navbar.css";

import { NavLink } from 'react-router-dom';
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
                        <NavLink activeClassName="active-nav-link" className="nav-link" to="/" exact>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active-nav-link" className="nav-link" to="/sql" exact>New Editor</NavLink>
                    </li>
                    <li className="nav-item">
                        <a 
                            className="nav-link nav-link-logout" 
                            href="https://github.com/akshatatray/atlan-sql-editor" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
