import React from 'react';
import "./Editor.css";

import IDE from './IDE';

const Editor = () => {
    return (
        <div className="Editor">
            <div className="Editor-Body">

            </div>
            <div className="Editor-IDE">
                <IDE />
            </div>
            <div className="Editor-Actions">

            </div>
        </div>
    )
}

export default Editor;
