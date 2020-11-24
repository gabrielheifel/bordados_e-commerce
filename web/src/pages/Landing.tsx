import React from 'react';
import { GiFlowerPot } from 'react-icons/gi';

import '../styles/pages/landing.css';
import landingImg from '../images/img_landing.jpg';

import PageHeader from '../components/PageHeader';
import ButtonGo from '../components/ButtonGo';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <PageHeader />      
        <main>
          <h1>Tulipa Bordados</h1>
          <ButtonGo to="/produtos" text="SHOP NOW" />
        </main>
      </div>
    </div>
  );
}

export default Landing;