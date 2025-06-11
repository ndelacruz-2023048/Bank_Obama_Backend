import Deposito from './despositos.model.js';
import User from '../users/users.model.js';

async function actualizarSaldoCuenta(userId, monto) {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('Usuario no encontrado');
    }
    user.saldo += monto;
    await user.save();
}


export const addDeposito = async (req, res) => {
    try {
        const data = req.body;

        if ( !data.nombreDeposito || !data.descripcion || !data.monto || !data.tipo) {
            return res.status(500).send({ message: 'Todos los campos son obligatorios' });
        }

        if (data.monto <= 0) {
            return res.status(400).send({ message: 'El monto debe ser mayor a cero' });
        }
        const nuevoDeposito = new Deposito(data)

        await nuevoDeposito.save();
        await actualizarSaldoCuenta(data.user, data.monto);
        return res.status(201).send({
            message: 'Depósito creado exitosamente',
            deposito: nuevoDeposito,
            reversibilidad: 'Puede ser revertido dentro del primer minuto'
        });
    } catch (error) {
        console.error('Error al crear depósito:', error);
        return res.status(500).json({
            message: 'Error al crear el depósito',
            error: error.message
        });
    }
};

export const revertirDeposito = async (req, res) => {
    try {
        const { id } = req.params;

        const deposito = await Deposito.findById(id);

        if (!deposito) {
            return res.status(404).send({ message: 'Depósito no encontrado' });
        }

        const tiempoTranscurrido = new Date() - deposito.fechaCreacion;
        const limiteTiempo = 60000; // 1 minuto en milisegundos

        if (tiempoTranscurrido > limiteTiempo) {
            return res.status(400).send({
                message: 'No se puede revertir el depósito después de 1 minuto',
                tiempoTranscurrido: `${tiempoTranscurrido / 1000} segundos`
            });
        }

        if (!deposito.reversible) {
            return res.status(400).send({ message: 'Este depósito ya fue revertido' });
        }

        deposito.reversible = false;
        deposito.fechaReversion = new Date();
        await deposito.save();

        await actualizarSaldoCuenta(deposito.user, -deposito.monto);

        return res.status(200).send({
            message: 'Depósito revertido exitosamente',
            deposito
        });

    } catch (error) {
        console.error('Error al revertir depósito:', error);
        return res.status(500).json({
            message: 'Error al revertir el depósito',
            error: error.message
        });
    }
};