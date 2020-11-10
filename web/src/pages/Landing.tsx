import React from 'react';

import '../styles/pages/landing.css';

import PageHeader from '../components/PageHeader';
import ButtonGo from '../components/ButtonGo';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <PageHeader />
        <main>
          <h1>Bordados a Mão</h1>
          <p>Feito com carinho!</p>
          <ButtonGo to="/produtos" text="SHOP NOW" />
        </main>
      </div>
    </div>
  );
}

export default Landing;