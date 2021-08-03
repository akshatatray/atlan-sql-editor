import React, { useState, Suspense } from 'react';
import './SqlEditor.css';

const Sidebar = React.lazy(() => import('../Sidebar/Sidebar'));
const Editor = React.lazy(() => import('../Editor/Editor'));
const Output = React.lazy(() => import('../Output/Output'));

const SqlEditor = () => {
  const [currQuery, setCurrQuery] = useState("");

  const processQuery = (query) => {
    console.log(query);
    setCurrQuery(query);
  }

  return (
    <div className="SqlEditor">
      <div className="SqlEditor-editor">
        <Suspense fallback={<div></div>}>
          <Sidebar csvFile={currQuery} />
          <Editor getQueryOutput={processQuery} />
        </Suspense>
      </div>
      <div className="SqlEditor-output">
        <Suspense fallback={<div></div>}>
          <Output displayQuery={currQuery} />
        </Suspense>
      </div>
    </div>
  );
}

export default SqlEditor;
