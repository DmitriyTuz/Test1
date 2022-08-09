require('dotenv').config()
const express = require('express')
const http = require("http");
const Router = require('express')

const app = express()
const sequelize = require('./db')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const server = http.createServer(app);

const PORT = 5000

app.use(express.json())
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler)

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))