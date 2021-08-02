import React, { useState } from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Editor from './Components/Editor/Editor';
import Output from './Components/Output/Output';

const App = () => {
  const [currQuery, setCurrQuery] = useState("");

  const processQuery = (query) => {
    console.log(query);
    setCurrQuery(query);
  }

  return (
    <div className="App">
      <Navbar/>
      <div className="App-editor">
        <Sidebar/>
        <Editor getQueryOutput={processQuery}/>
      </div>
      <div className="App-output">
        <Output displayQuery={currQuery}/>
      </div>
    </div>
  );
}

export default App;
