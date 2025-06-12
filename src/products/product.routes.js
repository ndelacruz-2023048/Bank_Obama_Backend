import { Router } from 'express';
import { getProducts, addNewProduct,editProduct,deleteProduct } from './product.controller.js';

const api = Router();

api.get('/list', getProducts);
api.post('/addProd', addNewProduct)
api.put('/editProd', editProduct)
api.delete('/deleteProd', deleteProduct)

export default api;
