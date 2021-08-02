import React from 'react';
import './IDE.css';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/neat.css';

const IDE = () => {
    const preCode = '/* \n    ENTER QUERIES TO GET RESULTS \n*/';
    return (
        <div className="IDE">
            <CodeMirror 
                className="CodeMirror"
                value={preCode}
                options={{
                    mode: 'SQL',
                    theme: 'neat',
                }}
            />
        </div>
    )
}

export default IDE;