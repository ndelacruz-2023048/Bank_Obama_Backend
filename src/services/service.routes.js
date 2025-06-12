import { Router } from 'express';
import { getServices, addNewService,editService,deleteService } from './service.controller.js';

const api = Router();

api.get('/list', getServices);
api.post('/addServ', addNewService)
api.put('/editServ', editService)
api.delete('/deleteServ', deleteService)

export default api;