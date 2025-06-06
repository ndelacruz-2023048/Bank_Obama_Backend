import { Schema, model } from "mongoose";

const transferSchema = new Schema(
    {
        fromAccount:{
            type: String,
            required: true,
        },
        toAccount: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
            min: 0.01,
        },
        concept: {
            type: String,
            required: true,
            trim: true,
        },
        date: {
            type: Date,
            required: true,
        },
        }, {
        timestamps: true,
    }
)

export default model('Transfer', transferSchema)