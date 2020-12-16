import React from 'react';

import PageHeader from '../components/PageHeader';
import Input from '../components/Input';
import ButtonGo from '../components/ButtonGo';

import '../styles/pages/create-account.css';

function CreateAccount() {
  return(
    <div id="page-create-account">
      <article className="content-wrapper">
        <div className="page-header">
          <PageHeader />
        </div>
        <h2 className="tittle">Crie sua Conta</h2>
        <div className="info-container">
          <h3>Info Pessoais:</h3>
          <div className="personal-container">
            <div className="line1">
              <Input name="nome" label="Nome*" />
              <Input name="sobrenome" label="Sobrenome" />
              <Input name="cpf" label="CPF*" />
            </div>
            <div className="line2">
              <Input name="email" label="E-mail*" />
              <Input name="senha" label="Senha*" />
              <Input name="telefone" label="Telefone" />
            </div>
          </div>
          <h3>Endereço:</h3>
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
          <div className="send-button">
            <ButtonGo text="Criar" to="/personal-page"/>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CreateAccount;