//server config
const expressLayouts = require('express-ejs-layouts')
const express = require('express')
const {default : mongoose} = require('mongoose');
const app = express()
mongoose.connect("mongodb://localhost:27017/passport-js",{}).then(function () {
    console.log("connected to Mongoose")
})
require('dotenv').config()
const port = process.env.PORT || 5000

//setup application
app.use(express.json())
app.use(express.urlencoded({ extended}))

//setup view engine and layouts
app.use(expressLayouts)
app.set('view engine', "ejs")
app.set('layout', "./layout/main.ejs")

app.get('/' , (req , res)=>{

   res.send('hello from puyan server :)')

})

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))