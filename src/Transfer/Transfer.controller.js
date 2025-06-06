import Transfer from './Transfer.model.js';

// Crear una nueva transferencia
export const createTransfer = async (req, res) => {
    try {
        const { fromAccount, toAccount, amount, concept, date } = req.body

        if (!fromAccount || !toAccount || !amount || !concept || !date) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' })
        }

    const newTransfer = new Transfer({
        fromAccount,
        toAccount,
        amount,
        concept,
        date,
    })

    await newTransfer.save()
        res.status(201).json({ message: 'Transferencia registrada correctamente.', transfer: newTransfer })
    } catch (error) {
        console.error('Error al crear transferencia:', error)
        res.status(500).json({ message: 'Error interno del servidor.' })
    }
}

// Obtener todas las transferencias (opcional)
export const getTransfers = async (req, res) => {
    try {
        const transfers = await Transfer.find().sort({ createdAt: -1 })
        res.status(200).json(transfers)
    } catch (error) {
        console.error('Error al obtener transferencias:', error)
        res.status(500).json({ message: 'Error interno del servidor.' })
    }
}
