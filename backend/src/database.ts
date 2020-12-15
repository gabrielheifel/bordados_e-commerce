import { Pool } from 'pg';

export const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: '1234',
  database: 'tlp_ecommerce',
  port: 5432
});