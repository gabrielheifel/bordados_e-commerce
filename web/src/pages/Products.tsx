import React from 'react';

import PageHeader from '../components/PageHeader';
import BoxProd from '../components/BoxProd';

import '../styles/pages/products.css';

function Products() {
   return(
      <div id="page-products">
         <article className="content-wrapper">
            <PageHeader />
            <aside>
               <h3>Opcao tamanho</h3>
               <h3>Opcao estilo</h3>
               <h3>Opcao cor</h3>
               <h3>Opcao preço</h3>
            </aside>

            {/* vai precisar passar alguns parametros */}
            <BoxProd />
         </article>
      </div>
   );
}

export default Products;