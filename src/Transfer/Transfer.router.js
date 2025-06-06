import { Router } from "express";
import { createTransfer, getTransfers} from "./Transfer.controller.js";

const api = Router()

api.post('/postTrasfer', createTransfer)
api.get('/getTrasfer', getTransfers)

export default api