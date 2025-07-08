const express = require('express');
const mongoose = require('mongoose')
const URL = "mongodb://127.0.0.1:27017/BooksDB"
const app = express()
app.use(express.json())

mongoose.connect(URL, {useNewUrlParser:true})
const conn = mongoose.connection

conn.on('open', ()=>{
    console.log("Connected to DB...")
})

app.get('/', (req, res)=>{
    res.send("Hello, You are on the Book Management Home Page.")
})

const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);

app.listen(3000, ()=>{
    console.log("Server running...")
})