import React from 'react';

import ButtonGo from '../ButtonGo';

import landingImg from '../images/img_landing.jpg';

import './styles.css';

function BoxProd() {
   return (
      <article className="box-prod">
         <header>
            <h1>IMAGEM</h1>
            {/* <img src={landingImg} alt={nome} /> */}
            <p>20cm</p>
         </header>
         <section>
            <h2>Estilo</h2>
            <p>Descricao</p>
            <p className="price">
               <strong>R$ Preco</strong>
            </p>
         </section>
         <footer>
            {/* mudar size do botao */}
            <ButtonGo to="#" text="Add carrinho" />
         </footer>
      </article>
   );
}

export default BoxProd;