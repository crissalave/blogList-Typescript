import express, { Request } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import * as dotenv from 'dotenv'
import morgan from 'morgan'

import blogsRouter from './controllers/blogs'

dotenv.config()
const app = express()

morgan.token('reqBody', (req: Request): string => {
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :reqBody'))
app.use(cors())
app.use(express.json())

console.log(`connecting to mongo database ...`)
mongoose
    .connect(process.env.MONGODB ||  '')
    .then((): void => {
        console.log('connected to database')
    })
    .catch((error): void => {
        console.error(`cannot connect to database: ${error.name}`)
    })

app.use('/api/blogs', blogsRouter)

app.listen(process.env.PORT, (): void => {
    console.log(`server running at http://localhost:${process.env.PORT}`)
})