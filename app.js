const express = require('express')

const authRoutes = require('./routes/auth.routes')

const app = express()
const port = 3000

app.use(authRoutes)

app.listen(port)
