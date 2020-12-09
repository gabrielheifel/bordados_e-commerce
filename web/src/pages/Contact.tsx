import React from 'react';
import { FaInstagram } from 'react-icons/fa';

import PageHeader from '../components/PageHeader';

import '../styles/pages/contact.css';

function Contact() {
  return(
    <div id="page-contact">
      <article className="content-wrapper">
        <div className="page-header">
          <PageHeader />        
        </div>
        <main className="social">
          <div className="instagram">
            <a className="faviconIG" href="https://www.instagram.com/tulipa_bordados/?hl=pt-br" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={80} color="#191919" />
            </a>
          </div>
          <p>@tulipabordados</p>   
          <div className="email">
            <h3>E-mail:</h3>
            <h2>contato@tulipabordados.com</h2>
          </div>
        </main>
      </article>
    </div>
  );
}

export default Contact;