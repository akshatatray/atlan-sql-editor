import React from 'react';
import "./Output.css";

import Doc from './doc.svg';

const Output = () => {
    return (
        <div className="Output">
            <div className="Output-doc">
                <img src={Doc} alt="doc"/>
                <p>The results of your query will appear here.</p>
            </div>
        </div>
    )
}

export default Output;
