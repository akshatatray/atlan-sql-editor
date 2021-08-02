import React from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Editor from './Components/Editor/Editor';
import Output from './Components/Output/Output';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <div className="App-editor">
        <Sidebar/>
        <Editor/>
      </div>
      <div className="App-output">
        <Output/>
      </div>
    </div>
  );
}

export default App;
