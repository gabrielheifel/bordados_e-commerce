import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { db } from '../database';

export const getUserById = async (req:Request, res:Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const response:QueryResult = await db.query('SELECT * FROM users WHERE id_user = $1', [id]);
    return res.json(response.rows);
  }
  catch(err) {
    console.log(err);
    return res.status(500).json('Internal Server Error');
  } 
}
export const createUser = async (req:Request, res:Response): Promise<Response> => {
  const { pnome,snome,email,senha,cpf,is_adm,cep,uf,cidade,rua,numero,complemento } = req.body;
  const responseUser= await db.query('INSERT INTO users (id_user, pnome, snome, email, senha, cpf, is_adm) VALUES ($1, $2, $3, $4, $5, $6)', 
    [pnome, snome, email, senha, cpf, is_adm]);
  const responseAddress:QueryResult = await db.query('INSERT INTO addresses (cep, uf, cidade, rua, numero, complemento) VALUES ($1, $2, $3, $4, $5, $6)',
    [cep, uf, cidade, rua, numero, complemento]);
  return res.json({
    message: 'Usuário criado com sucesso!', 
    body: {
      user: {
        pnome,
        snome,
        email, 
        senha,
        cpf
      },
      addresses: {
        cep, 
        uf, 
        cidade, 
        rua, 
        numero,
        complemento
      }
    }
  })
}

// export const updateUser = (req:Request, res:Response): Promise<Response> => {
  
// }

// export const deleteUser = (req:Request, res:Response): Promise<Response> => {
  
// }