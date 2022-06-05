const path = require('path')
const express = require('express')
const ejsMate = require('ejs-mate')

const authRoutes = require('./routes/auth.routes')

const app = express()
const port = 3000

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', authRoutes)

app.listen(port)
