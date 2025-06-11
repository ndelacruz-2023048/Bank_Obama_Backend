import { Router } from "express";
import { addDeposito,
        actualizarSaldoCuenta,
        revertirDeposito } from "./depositos.controller.js";

const depositos = Router();

depositos.post("/depositos", addDeposito);
depositos.put("/depositos/actualizar-saldo", actualizarSaldoCuenta);
depositos.post("/depositos/revertir/:id", revertirDeposito);


export default depositos;