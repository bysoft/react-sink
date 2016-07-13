import React from 'react';
import { Link } from 'react-router';

export default () => (<nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">Racket</Link>
    </div>

    <div>
      <ul className="nav navbar-nav">
        <li><Link to="">Home</Link></li>
        <li><Link to="tweets">Tweets</Link></li>
        <li><Link to="hottest">Hottests on Github</Link></li>
        <li><Link to="rebass">Rebass</Link></li>
      </ul>
    </div>
  </div>
</nav>);
