import { Router } from 'express';
import { getProducts, addNewProduct } from './product.controller.js';

const api = Router();

api.get('/list', getProducts);
api.post('/addProd', addNewProduct)

export default api;
