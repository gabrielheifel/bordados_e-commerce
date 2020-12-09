import React from 'react';

import PageHeader from '../components/PageHeader';
import Input from '../components/Input';
import ButtonGo from '../components/ButtonGo';

import '../styles/pages/create-account.css';

function CreateAccount() {
  return(
    <div id="page-login">
      <article className="content-wrapper">
        <div className="page-header">
          <PageHeader />
        </div>
        <div className="info-container">
          <div className="personal-container">
            <Input name="nome" label="Nome*" />
            <Input name="sobrenome" label="Sobrenome" />
            <Input name="cpf" label="CPF*" />
            <Input name="email" label="E-mail*" />
            <Input name="senha" label="Senha*" />
          </div>
          <div className="address1-container">
            <Input name="cep" label="CEP*" />
            <Input name="cidade" label="Cidade*" />
            <Input name="estado" label="Estado*" />
          </div>
          <div className="address2-container">
          <Input name="rua" label="Rua*" />
            <Input name="numero" label="Número*" />
            <Input name="complemento" label="Complemento" />
          </div>
        </div>
      </article>
    </div>
  );
}

export default CreateAccount;