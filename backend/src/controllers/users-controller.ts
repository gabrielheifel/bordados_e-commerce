import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { db } from '../database';

export const getUserById = async (req:Request, res:Response): Promise<Response> => {
  const id = parseInt(req.params.id);
  const response:QueryResult = await db.query('SELECT * FROM users WHERE id_user = $1', [id]);
  return res.json(response.rows);
}

// export const createUser = (req:Request, res:Response): Promise<Response> => {
  
// }

// export const updateUser = (req:Request, res:Response): Promise<Response> => {
  
// }

// export const deleteUser = (req:Request, res:Response): Promise<Response> => {
  
// }