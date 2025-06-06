import { Schema, model } from "moongose"

const serviceSchema = Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        fee: {
            type: Number,
            required: true,
            min: 0,
        },
        category: {
            type: String,
            enum: ['Loan', 'Account', 'Insurance', 'Card', 'Investment', 'Other'],
            default: 'Other',
        },
        available: {
            type: Boolean,
            default: true,
        }
    }
)

export default model('service', serviceSchema)