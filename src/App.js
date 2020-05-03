import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UseState from './hooks/UseState';
import UseCallback from './hooks/UseCallback';

function App() {
  return (
    <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div style={{ display: 'flex' }}>
        <nav className="App-nav">
          <ul>
            <li>
              <Link to="/use-state">useState</Link>
            </li>
            <li>
              <Link to="/use-callback">useCallback</Link>
            </li>
          </ul>
        </nav>
        <div style={{ padding: 15 }}>
          <Switch>
            <Route path="/use-state">
              <UseState />
            </Route>
            <Route path="/use-callback">
              <UseCallback />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
