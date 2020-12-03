import React from 'react';

import PageHeader from '../components/PageHeader';
import BoxProd from '../components/BoxProd';

import '../styles/pages/products.css';

function Products() {
   return(
      <div id="page-products">
         <article className="content-wrapper">
            <div className="page-header">
               <PageHeader />
            </div>
            <div className="conteudo">
               <div className="nav-bar">
                  <h3>Opcao tamanho</h3>
                  <h3>Opcao estilo</h3>
                  <h3>Opcao cor</h3>
                  <h3>Opcao preço</h3>
               </div>

               {/* vai precisar passar alguns parametros */}
               <div className="bordados">
                  <BoxProd />
                  <BoxProd />
                  <BoxProd />
               </div>
            </div>
         </article>
      </div>
   );
}

export default Products;