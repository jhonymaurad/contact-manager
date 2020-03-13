import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header({ branding }) {
  return (
    <nav className="navbar navbar-expand-sm nav-bar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/">{branding}</Link>

        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus"></i> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/edit/:id" className="nav-link">
                <i className="fas fa-edit"></i> Edit
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question"></i>About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  branding: 'MY APP'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
