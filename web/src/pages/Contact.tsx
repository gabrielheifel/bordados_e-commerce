import React from 'react';

import PageHeader from '../components/PageHeader';

import '../styles/pages/contact.css';

function Contact() {
  return(
    <div id="page-contact">
      <article className="content-wrapper">
        <div className="page-header">
          <PageHeader />
        </div>
        <div className="letter">
          <h1>Fale com a gente!</h1>
          <p>
            <textarea placeholder="Sua Mensagem..." ></textarea>
          </p>
          <div className="side">
            <p>
              <input type="text" placeholder="Seu Nome*" />
            </p>
            <p>
              <input type="text" placeholder="Seu Email*" />
            </p>
            <p>
              <button id="sendLetter">Enviar</button>
            </p>
          </div>
        </div>
      </article>
      <div className="envelope-front"></div>
      <div className="envelope-back"></div>
    </div>
  );
}

export default Contact;