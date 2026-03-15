import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Rakesh Chowdary's personal website. Data Engineer III at Walmart Global Tech. "
      + 'M.S. Computer Science (GPA 4.0), University of Colorado Boulder. Former Data Engineer at Target Corporation.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">Rakesh Chowdary Yarlagadda</Link>
          </h2>
          <p>Data Engineer III at Walmart Global Tech &mdash; building scalable data pipelines
            and analytics systems at enterprise scale.
          </p>
        </div>
      </header>
      <p>
        Welcome! I&apos;m a data engineer with a background in distributed systems, ML pipelines,
        and full-stack development. I hold an M.S. in Computer Science (GPA 4.0) from the{' '}
        <a href="https://www.colorado.edu/">University of Colorado Boulder</a> and have built
        data infrastructure at companies like Target Corporation and Walmart.
      </p>
      <p>
        Feel free to read more <Link to="/about">about me</Link>, explore my{' '}
        <Link to="/resume">resume</Link>, check out my <Link to="/projects">projects</Link>,
        or <Link to="/contact">get in touch</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
