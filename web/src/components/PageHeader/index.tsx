import React from 'react';
import { FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
// import logoImg from './images/logo';

function PageHeader() {
   return(
      <header className="page-header">
         {/* <img src={logoImg} alt="Tulipa Bordados"/>   */}
         <Link className="logo" to="/">Tulipa Bordados</Link>

         <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Bordados</Link></li>
            <li><Link to="#">Contanto</Link></li>
         </ul>

         <input type="" name="Pesquisa" id="pesquisa" />

         <ul className="login">
            <li>
               <Link to="#">
                  <FiUser size={24} color="#191919"/>
                  <span>Mrs Nome</span>
               </Link>
            </li>
            <li>
               <Link to="#">
                  <FiShoppingBag size={24} color="#191919" />
                  <span>Carrinho</span>
               </Link>
            </li>
         </ul>
      </header>
   );
}

export default PageHeader;