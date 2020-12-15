import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import Input from '../components/Input';
import ButtonGo from '../components/ButtonGo';

import '../styles/pages/login.css';

function Login() {
  return(
    <div id="page-login">
      <article className="content-wrapper">
        <div className="page-header">
          <PageHeader />
        </div>
        <h2 className="tittle-login">Login</h2>
        <div className="login-container">
          <Input name="cpf" label="CPF" />
          <Input name="senha" label="Senha" />
          <ButtonGo text="Login" to="/personal-page"/>
          <p>Não tem registro?<Link to="/create-account">Crie uma conta</Link></p>
        </div>
      </article>
    </div>
  );
}

export default Login;