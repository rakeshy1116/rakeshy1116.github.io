import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons/faMoon';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';

import Hamburger from './Hamburger';
import routes from '../../data/routes';
import useDarkMode from '../../hooks/useDarkMode';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <header id="header">
      <h1 className="index-link">
        {routes.filter((l) => l.index).map((l) => (
          <Link key={l.label} to={l.path}>{l.label}</Link>
        ))}
      </h1>
      <nav className="links">
        <ul>
          {routes.filter((l) => !l.index).map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="dark-mode-toggle">
        <button
          type="button"
          onClick={() => setIsDark(!isDark)}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="dark-mode-button"
        >
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </button>
      </div>
      <Hamburger />
    </header>
  );
};

export default Navigation;
