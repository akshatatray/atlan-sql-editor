import React, { useState } from 'react';
import './IDE.css';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/neat.css';
import { CSVLink } from 'react-csv';
import customerAll from '../Output/csv/customerAll';
import customerLondon from '../Output/csv/customerLondon';

const IDE = ({ onQueryRun }) => {
    const preCode = '/* Write your SQL Query Statement below.\nDelete This Comment and then Copy the Mock Query! */\n';
    const [code, setCode] = useState(preCode);

    return (
        <div className="IDE">
            <CodeMirror 
                className="CodeMirror"
                value={code}
                options={{
                    mode: 'SQL',
                    theme: 'neat',
                }}
                onChange={(e) => {
                    setCode(e.getValue());
                }}
            />
            <div className="Editor-Actions">
                <CSVLink 
                    className="csvLink"
                    data={code === "SELECT * FROM Atlan;" ? customerAll :  customerLondon} 
                    filename={code === "SELECT * FROM Atlan;" ? "customerAll" : "customerLondon"}
                >
                    <button 
                        disabled={!(code === "SELECT * FROM Atlan;" || code === "SELECT * FROM Atlan WHERE city='London';")}
                        className="Editor-Actions-Btn Download-btn"
                        onClick={() => {console.log("Tapped")}}
                    >
                        DOWNLOAD CSV
                    </button>
                </CSVLink>
                <button 
                    className="Editor-Actions-Btn Run-Btn"
                    onClick={() => onQueryRun(code)}
                >
                    RUN
                </button>
            </div>
        </div>
    )
}

export default IDE;


// <li className="Sidebar-navItem">
// <a href="#" className="Sidebar-navLink">
//     {
//         (csvFile === "SELECT * FROM Atlan;" || csvFile === "SELECT * FROM Atlan WHERE city='London';") ?
//         (
//             <CSVLink 
//                 data={csvFile === "SELECT * FROM Atlan;" ? customerAll :  customerLondon} 
//                 filename={csvFile === "SELECT * FROM Atlan;" ? "customerAll" : "customerLondon"}
//             >
//                 <img src={Download} className="Sidebar-Icn" alt="Download" />
//             </CSVLink>
//         ) : (<></>)
//     }
// </a>
// </li>