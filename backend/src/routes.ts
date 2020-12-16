import { Router } from 'express';
const router = Router();

import { getUserById, createUser } from './controllers/users-controller';
import { getProduct } from './controllers/prod-controller';


router.get('/produtos', getProduct);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
// router.put('/user:id', getUser);
// router.delete('/user:id', getUser);

export default router;