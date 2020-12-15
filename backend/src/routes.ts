import { Router } from 'express';
const router = Router();

import { getUserById } from './controllers/users-controller';
import { getProduct } from './controllers/prod-controller';


router.get('/products', getProduct);
router.get('/user/id', getUserById);
// router.post('/user', getUser);
// router.put('/user:id', getUser);
// router.delete('/user:id', getUser);

export default router;