const express  = require('express')
const mongoose = require('mongoose')
const router = require('./routes/index')


const app = express()

// conection to mongodb
mongoose.connect('mongodb://localhost:27017/todoApp_express', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// middlewares

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// routes
app.use(router)

// Server listening
app.listen(3000, ()=> console.log('Server is listening on port: 3000'))