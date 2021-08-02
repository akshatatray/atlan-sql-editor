import React, { useState } from 'react';
import './IDE.css';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/neat.css';

const IDE = ({ onQueryRun }) => {
    const preCode = '/* Write your SQL Query Statement below */\n';
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
                <button className="Editor-Actions-Btn Share-Btn">SHARE</button>
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