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
                    Customers’ Dataset
                </h4>
                <p className="Editor-Body-Para">
                    This is the dataset that you will be working with.
                </p>
            </div>
            <div className="Editor-IDE">
                <IDE onQueryRun={runQuery}/>
            </div>
        </div>
    )
}

export default Editor;
