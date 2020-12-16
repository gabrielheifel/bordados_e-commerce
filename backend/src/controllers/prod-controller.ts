import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { db } from '../database';

export const getProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await db.query('SELECT * FROM product');
    return res.status(200).json(response.rows);
  }
  catch(err) {
    console.log(err);
    return res.status(500).json('Internal Server Error');
  }
}