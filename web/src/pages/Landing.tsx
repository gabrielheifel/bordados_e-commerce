import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import PageHeader from '../components/PageHeader';

function Landing() {
   return(
      <div id="page-landing">
      <div className="content-wrapper">
        <PageHeader/>
        <main>
          <h1>Bordados a Mão</h1>
          <p>Feito com carinho!</p>
          <Link to="/produtos" className="enter-product">Shop Now</Link>
        </main>
      </div>
    </div>
   );
}

export default Landing;