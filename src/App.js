import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// Importing Lazy Components
const Home = lazy(() => import('./Components/Home/Home'));
const SqlEditor = lazy(() => import('./Components/SqlEditor/SqlEditor'));
const Navbar = lazy(() => import('./Components/Navbar/Navbar'));

const App = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/sql" exact component={SqlEditor} />
      </Router>
    </Suspense>
  );
}

export default App;
