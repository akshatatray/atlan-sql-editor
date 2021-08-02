import React from 'react';
import "./Editor.css";

import IDE from './IDE';

const Editor = ({ getQueryOutput }) => {

    const runQuery = (query) => {
        getQueryOutput(query);
    }

    return (
        <div className="Editor">
            <div className="Editor-Body">
                <h4 className="Editor-Body-Heading">
                    Customer Database's Mock Queries:
                </h4>
                <p className="Editor-Body-Para">
                    Copy and Run following mock queries {<br/>}
                    <span className="blue">SELECT</span> <span className="red">*</span> <span className="blue">FROM</span> Atlan; {<br/>}
                    <span className="blue">SELECT</span> <span className="red">*</span> <span className="blue">FROM</span> Atlan <span className="blue">WHERE</span> city<span className="red">=</span>'London'; {<br/>}
                </p>
            </div>
            <div className="Editor-IDE">
                <IDE onQueryRun={runQuery}/>
            </div>
        </div>
    )
}

export default Editor;
