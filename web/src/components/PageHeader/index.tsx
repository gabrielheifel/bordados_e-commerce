import React from 'react';
import { FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
// import logoImg from './images/logo';

function PageHeader() {
   return(
      <header className="page-header">
         {/* <img src={logoImg} alt="Tulipa Bordados"/>   */}
         <a className="logo" href="#">Tulipa Bordados</a>

         <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Bordados</Link></li>
            <li><Link to="#">Contanto</Link></li>
         </ul>

         <ul className="login">
            <input type="" name="Pesquisa" id="pesquisa" />
            <li>
               <Link to="#">
                  <FiUser size={24} color="#191919"/>
               </Link>
            </li>
            <li>
               <Link to="#">
                  <FiShoppingBag size={24} color="#191919" />
               </Link>
            </li>
         </ul>
      </header>
   );
}

export default PageHeader;