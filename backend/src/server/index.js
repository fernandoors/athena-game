import express from 'express'
import 'express-async-errors';
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'
import Routes from '../routes'
import Errors from '../shared/Errors'

const app = express()
const serverHttp = http.Server(app)
const io = new Server(serverHttp)

app.use(cors())
app.use(express.json())

app.use(Routes)

app.use(Errors)

export { serverHttp, io }
