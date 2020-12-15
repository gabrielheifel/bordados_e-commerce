import React from 'react';

import { RiVisaLine, RiMastercardLine, RiBarcodeLine } from 'react-icons/ri';

import PageHeader from '../components/PageHeader';
import CartProdBox from '../components/CartProdBox';
import ButtonGo from '../components/ButtonGo';

import '../styles/pages/little-cart.css';

function LittleCart() {
  return(
    <div id="page-cart">
      <article className="content-wrapper">
        <div className="page-header">
          <PageHeader />
        </div>
        <div className="container">
          <div className="cart-prod">
            <h2>Seu Carrinho</h2>
            <CartProdBox />
            <CartProdBox />
            <CartProdBox />
            <CartProdBox />
            <CartProdBox />
            <CartProdBox />
          </div>
          <aside>
            <div className="prices-end">
              <h3>Sub-Total: <strong>R$ 150</strong></h3>
              <p>Desconto: <span>R$ 0,00</span></p>
              <p>Frete: <strong>R$ 45</strong></p>
            </div>
            <h2 className="total">Total: <strong>R$ 195</strong></h2>
            <div className="payment">
              <p>Escolha a forma de pagamento:</p>
              <div className="form-pay">
                <RiVisaLine size={40} color="#01579F" className="flag" />
                <RiMastercardLine size={40} color="#F18237" className="flag" />
                <RiBarcodeLine size={40} className="flag" />
              </div>
            </div>
            <ButtonGo text="Finalizar" to="#" />
          </aside>
        </div>
      </article>
    </div>
  );
}

export default LittleCart;