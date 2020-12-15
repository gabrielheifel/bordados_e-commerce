import express from 'express';
import routes from './routes';

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(routes);

app.listen(3333);


// Rota = conjunto
// Recurso = usuario

// Metodos HTTP = GET, POST, PUT, DELETE
// Parametros 

// GET = Buscar uma informação (Lista, item)
// POST = Criar uma info
// PUT = Editar um info
// DELETE = Deletar uma info

// Query Params: http://localhost:333/users?search=gabriel
// Route Params: http://localhost:333/users/1 (Identifica um recurso, ex: id_user)
// Body: http://localhost:333/users (Identificar um recurso maior)

// console.log(request.query);
// console.log(request.params);
// console.log(request.body);