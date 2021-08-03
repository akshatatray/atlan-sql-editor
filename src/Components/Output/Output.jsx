import React from 'react';
import "./Output.css";

import { CsvToHtmlTable } from 'react-csv-to-table';
import customerAll from './csv/customerAll.js';
import customerLondon from './csv/customerLondon.js';

import Doc from './doc.svg';

const Output = ({ displayQuery }) => {
    switch (displayQuery) {
        case "": return (
            <div className="Output" style={{ backgroundColor: "#F5F5F5" }}>
                <div className="Output-doc">
                    <img src={Doc} alt="doc" />
                    <p>The results of your query will appear here.</p>
                </div>
            </div>
        );

        case "SELECT * FROM Atlan;": return (
            <div className="Output">
                <div style={{
                    height: "calc(100% - 30px)",
                    width: "calc(100% - 30px)",
                    overflow: "scroll",
                    overflowY: "scroll",
                    padding: "15px"
                }}>
                    <CsvToHtmlTable
                        data={customerAll}
                        csvDelimiter=","
                    />
                </div>
            </div>
        );

        case "SELECT * FROM Atlan WHERE city='London';": return (
            <div className="Output">
                <div style={{
                    height: "calc(100% - 30px)",
                    width: "calc(100% - 30px)",
                    overflow: "scroll",
                    overflowY: "scroll",
                    padding: "15px"
                }}>
                    <CsvToHtmlTable
                        data={customerLondon}
                        csvDelimiter=","
                    />
                </div>
            </div>
        );

        default: return (
            <div className="Output" style={{ backgroundColor: "#F5F5F5" }}>
                <div className="Output-doc" style={{ color: "#d22020" }}>
                    Please Use the Mock Queries!
                </div>
            </div>
        );
    }
}

export default Output;
