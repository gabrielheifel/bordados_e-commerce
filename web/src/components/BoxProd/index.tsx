import React from 'react';

import ButtonGo from '../ButtonGo';

import landingImg from '../../images/img_landing.jpg';

import './styles.css';

function BoxProd() {
   return (
      <article className="box-prod">
         <header>
            <img src={landingImg} alt="foto1" />
         </header>
         <section>
            <p className="size-prod">20cm</p>
            <h3>Big descriction on box</h3>
            <div className="info">
               <p>Kids</p>
               <p className="price">
                  <strong>R$ 75</strong>
               </p>
            </div>
         </section>
         <footer>
            {/* mudar size do botao */}
            <ButtonGo to="#" text="Add carrinho" />
         </footer>
      </article>
   );
}

export default BoxProd;