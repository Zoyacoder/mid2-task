const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const registrationController = require('./controllers/registrationController')
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/mid2", () => console.log("Mongo connected.."));

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('registration')
})

app.get('/showUsers', registrationController.getUsers);

app.post('/register', registrationController.register);

app.post('/updateUser', registrationController.updateUser);

app.get('/delete', registrationController.deleteUser);

app.listen(3000, () => {
    console.log("Server is listening...")
})