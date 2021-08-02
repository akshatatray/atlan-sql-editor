import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SqlEditor from './Components/SqlEditor/SqlEditor';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/sql" exact component={SqlEditor}/>
    </Router>
  );
}

export default App;
