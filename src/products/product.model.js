import { Schema, model } from "moongose"

const productSchema = Schema(
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
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        stock: {
            type: Number,
            default: 0,
            min: 0,
        },
        category: {
            type: String,
            enum: ['Card', 'Merchandise', 'Device', 'Accessory', 'Document', 'Other'],
            default: 'Other',
        },
        available: {
            type: Boolean,
            default: true,
        },
        image_url: {
            type: String, // o usar almacenamiento en MongoDB GridFS o AWS
        }
    }
)

export default model('product', productSchema)