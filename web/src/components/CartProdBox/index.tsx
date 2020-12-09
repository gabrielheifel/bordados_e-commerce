import React from 'react';
import { FaTrash } from 'react-icons/fa';

import ButtonGo from '../ButtonGo';

import landingImg from '../../images/img_landing.jpg';

import './styles.css';

function CartProdBox() {
  return(
    <article className="cart-box-prod">
      <header>
        <img src={landingImg} alt="foto1" />
      </header>
      <div className="info">
        <p className="size-prod">Tamanho: 20cm</p>
        <h4>Descrição: Description on the box</h4>
        <p className="style">Estilo: Kids</p>
      </div>
      <div className="n-products">
        <p className="num-prod">Quantidade:</p>
        <input type="number" min="1" />
      </div>
      <div className="container-price">
        <p className="price"> Preço: 
          <strong> R$ 75</strong>
        </p>
      </div>
      <footer>
        <FaTrash size={24} />
      </footer>
    </article>
  );
}

export default CartProdBox;