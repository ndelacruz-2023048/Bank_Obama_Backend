'use strict'

import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from 'cors'

const configs = (app)=> {
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

/* const routes = (app)=> {
    app.use('/v1/onlinestore', authRoutes)
    app.use('/v1/onlinestore/Settings', updateProfile)
    app.use('/v1/onlinestore/Category', categoryRoutes)
    app.use('/v1/onlinestore/Product', productRoutes)
    app.use('/v1/onlinestore/Cart', cart)
    app.use('/v1/onlinestore/Order', order)
} */

export const initServer = ()=> {
    const app = express()
    try {
        configs(app)
        // routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running in port: ${process.env.PORT}`);
    } catch (e) {
        console.error('Server init failed: ', e);
    }
}