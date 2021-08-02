import React from 'react';
import "./Output.css";

import { CsvToHtmlTable } from 'react-csv-to-table';
import customerAll from './csv/customerAll.js';
import customerLondon from './csv/customerLondon.js';

import Doc from './doc.svg';

const Output = ({ displayQuery }) => {
    switch (displayQuery) {
        case "" : return (
            <div className="Output" style={{ backgroundColor: "#E1E1E1" }}>
                <div className="Output-doc">
                    <img src={Doc} alt="doc"/>
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

        default : return (
            <div className="Output" style={{ backgroundColor: "#E1E1E1" }}>
                <div className="Output-doc">
                    Please Use the Mock Queries!
                </div>
            </div>
        );
    }
    // return (
    //     <div 
    //         className="Output"
    //         style={
    //             displayQuery !== "" ? 
    //                 { backgroundColor: "#FFFFFF"} :
    //                 { backgroundColor: "#F1F1F1" }
    //         }
    //     >
    //         {/* {
    //             displayQuery === "" ? (
    //                 <div className="Output-doc">
    //                     <img src={Doc} alt="doc"/>
    //                     <p>The results of your query will appear here.</p>
    //                 </div>
    //             ) : (
    //                 <div style={{
    //                     height: "calc(100% - 30px)",
    //                     width: "calc(100% - 30px)",
    //                     overflow: "scroll",
    //                     overflowY: "scroll",
    //                     padding: "15px"
    //                 }}>
    //                     <CsvToHtmlTable
    //                         data={customerAll}
    //                         csvDelimiter=","
    //                     />
    //                 </div>
    //             )
    //         } */}
    //     </div>
    // )
}

export default Output;
