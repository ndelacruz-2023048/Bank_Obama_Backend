import Deposito from './despositos.model.js';

export const addDeposito = async (req, res) => {
    try {
        const data = req.body;
        if ( !data.nombreDeposito || !data.descripcion || !data.monto || !data.tipo) {
            return res.status(500).send({ message: 'Todos los campos son obligatorios' });
        }
        const nuevoDeposito = new Deposito(data)
        await nuevoDeposito.save();

        res.status(201).send({ message: 'Depósito creado exitosamente', nuevoDeposito });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el depósito' });
    }
}