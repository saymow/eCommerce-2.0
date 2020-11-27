import { Router } from 'express';

import productRoutes from './product.routes';
import userRoutes from './user.routes';
import sessionRoutes from './session.routes';
import addressRoutes from './address.routes';

const routes = Router();

routes.use('/products', productRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/users', userRoutes);
routes.use('/address', addressRoutes);

export default routes;
