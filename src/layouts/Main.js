import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const { PUBLIC_URL } = process.env;

const Main = (props) => {
  const title = props.title
    ? `${props.title} | Rakesh Chowdary Yarlagadda`
    : 'Rakesh Chowdary Yarlagadda';

  return (
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <Helmet defer={false}>
        <title>{title}</title>
        <meta name="description" content={props.description} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://rakeshy1116.github.io${PUBLIC_URL}`} />
        <meta property="og:image" content={`https://rakeshy1116.github.io${PUBLIC_URL}/images/me.jpeg`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={`https://rakeshy1116.github.io${PUBLIC_URL}/images/me.jpeg`} />
      </Helmet>
      <div id="wrapper">
        <Navigation />
        <div id="main">
          {props.children}
        </div>
        {props.fullPage ? null : <SideBar />}
      </div>
    </HelmetProvider>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Rakesh Chowdary Yarlagadda's personal website. Data Engineer III at Walmart Global Tech.",
};

export default Main;
