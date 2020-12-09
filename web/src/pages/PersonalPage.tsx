import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

import '../styles/pages/personal-page.css';

function PersonalPage() {
  return(
    <div id="personal-page">
      <article className="content-wrapper">
        <div className="page-header">
          <PageHeader />
        </div>
        <div className="container">
          <aside className="bar-info">
            <ul>
              <li>Meus Dados</li>
              <li>
                <Link to="/carrinho">Carrinho</Link>
              </li>
              <li>Histórico</li>
            </ul>
          </aside>
        </div>
      </article>
    </div>
  );
}

export default PersonalPage;