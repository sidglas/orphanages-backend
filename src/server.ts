import express from 'express'
import 'express-async-errors'
import path from 'path'
import cors from 'cors'

import './database/connection'
import errorHandler from './errors/handler'
const app = express()
import routes from './routes'

//app.use(cors())
app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)
app.listen(3333)


