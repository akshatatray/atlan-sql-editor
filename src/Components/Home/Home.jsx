import React from 'react';
import './Home.css';

import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className="Home">
            <Navbar/>
            <div className="Home-Heading-Container">
                <h1 className="Home-Heading">
                    Atlan Frontend Task{<br />}
                    <span className="blue">SQL Editor</span>
                </h1>
                <p className="Home-Description">
                    Click on New Editor, to get started!
                </p>
            </div>
        </div>
    );
}

export default Home;