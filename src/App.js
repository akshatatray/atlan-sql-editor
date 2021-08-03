import React, { lazy, Suspense } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
const Home = lazy(() => import('./Components/Home/Home'));
const SqlEditor = lazy(() => import('./Components/SqlEditor/SqlEditor'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/sql" exact component={SqlEditor}/>
      </Router>
    </Suspense>
  );
}

export default App;
