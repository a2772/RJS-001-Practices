const express = require('express')
const http = require('http')
const path = require('path')
const app = express()

app.set('title', 'First prac to write in DOM')
app.set('port', 3906)

//Middleware
app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('title')}. Running on port: ${app.get('port')}`)
})

//app.use(express.urlencoded({extended: false}))
//app.use(express.static(path.join(__dirname,'public')))