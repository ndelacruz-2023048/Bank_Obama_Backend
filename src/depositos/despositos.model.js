import { Schema, model } from 'mongoose';

const DepositoSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        
    },
    nombreDeposito: {
        type: String,
        required: [true, 'El nombre del depósito es obligatorio'],
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción del depósito es obligatoria'],
    },
    monto: {
        type: Number,
        required: [true, 'El monto del depósito es obligatorio'],
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    tipo: {
        type: String,
        enum: ['Efectivo', 'Transferencia', 'Cheque'],
        required: [true, 'El tipo de depósito es obligatorio'],
    },
})

export default model('Deposito', DepositoSchema);