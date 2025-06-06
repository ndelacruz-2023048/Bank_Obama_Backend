import { config } from 'dotenv'
import { connect } from './configs/mongo.js'
import { initServer } from './configs/app.js'
import { initAdmin } from './configs/init.configs.js'

config()
connect()
initServer()
initAdmin()