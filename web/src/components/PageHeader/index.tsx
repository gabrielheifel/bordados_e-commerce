import React from 'react';
import { FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
import logoImg from '../../images/tlp_logo.png';

function PageHeader() {
   return(
      <header className="page-header">  
         <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Bordados</Link></li>
            <li><Link to="/contato">Contanto</Link></li>
         </ul>

         <Link className="logo" to="/"><img src={logoImg} alt="Tulipa Bordados"/></Link>

         <ul className="login">
            <input type="text" name="Pesquisa" id="pesquisa" placeholder="Pesquisar" />
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