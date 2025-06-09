import { Router } from "express";
import { addDeposito } from "./depositos.controller.js";

const depositos = Router();

depositos.post("/depositos", addDeposito);

export default depositos;