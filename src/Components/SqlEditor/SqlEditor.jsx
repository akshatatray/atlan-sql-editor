import React, { useState } from 'react';
import './SqlEditor.css';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Editor from '../Editor/Editor';
import Output from '../Output/Output';

const SqlEditor = () => {
  const [currQuery, setCurrQuery] = useState("");

  const processQuery = (query) => {
    console.log(query);
    setCurrQuery(query);
  }

  return (
    <div className="SqlEditor">
      <Navbar/>
      <div className="SqlEditor-editor">
        <Sidebar/>
        <Editor getQueryOutput={processQuery}/>
      </div>
      <div className="SqlEditor-output">
        <Output displayQuery={currQuery}/>
      </div>
    </div>
  );
}

export default SqlEditor;
