import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="Rakesh Chowdary Yarlagadda" />
      </Link>
      <header>
        <h2>Rakesh Chowdary Yarlagadda</h2>
        <p><a href="mailto:rakeshchowdary.yarlagadda@colorado.edu">raya3562@colorado.edu</a></p>
        <ContactIcons />
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hello, I&apos;m Rakesh Chowdary. I am a Data Engineer III at <a href="https://tech.walmart.com/">Walmart Global Tech</a> and an M.S. CS graduate from <a href="https://www.colorado.edu/">University of Colorado Boulder</a>. Former Data Engineer at <a href="https://corporate.target.com/">Target Corporation</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <p className="copyright">&copy; Rakesh Chowdary Yarlagadda <Link to="/">rakeshcy.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
