import { Router } from 'express';
import { getServices, addNewService } from './service.controller.js';

const api = Router();

api.get('/list', getServices);
api.post('/addServ', addNewService)

export default api;