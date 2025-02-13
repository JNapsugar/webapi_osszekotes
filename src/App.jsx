import { TipusList } from './TipusList';
import { TipusSingle } from './TipusSingle';
import { TipusCreate } from './TipusCreate';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

export const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Tipusok
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create-tipus">
                Új tipus
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/tipus/:tipusId" element={<TipusSingle />} />
        <Route path="/" element={<TipusList />} />
        <Route path="/create-tipus" element={<TipusCreate />} />
      </Routes>
    </Router>
  );
};
