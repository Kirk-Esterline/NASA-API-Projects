const express = require('express')
const app = express()
const dotenv = require('dotenv')
const logger = require('morgan')
const mainRoutes = require('./routes/main')
const cameraRoutes = require('./routes/cameras')

// Load Config
dotenv.config({ path: './config/.env' })

app.set('view engine', 'ejs')
app.use(express.static('/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))



const PORT = process.env.PORT || 5000

app.use('/', mainRoutes)

app.listen(PORT, () =>{
    console.log(`Your port is running on Port ${PORT}: you had better go catch it.`)
})

//Test