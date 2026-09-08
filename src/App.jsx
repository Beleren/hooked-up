import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UseState from './hooks/UseState';
import UseCallback from './hooks/UseCallback';
import UseMemo from './hooks/UseMemo';
import UseRef from './hooks/UseRef';

function App() {
  return (
    <Router>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <div style={{ display: 'flex' }}>
        <nav className='App-nav'>
          <ul>
            <li>
              <Link to='/use-state'>useState</Link>
            </li>
            <li>
              <Link to='/use-callback'>useCallback</Link>
            </li>
            <li>
              <Link to='/use-memo'>useMemo</Link>
            </li>
            <li>
              <Link to='/use-ref'>useRef</Link>
            </li>
          </ul>
        </nav>
        <div style={{ padding: 15, width: '100%' }}>
          <Routes>
            <Route path='/' element={<p>Pick a hook from the menu.</p>} />
            <Route path='/use-state' element={<UseState />} />
            <Route path='/use-callback' element={<UseCallback />} />
            <Route path='/use-memo' element={<UseMemo />} />
            <Route path='/use-ref' element={<UseRef />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
