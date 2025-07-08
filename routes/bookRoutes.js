const express = require('express')
const mongoose = require('mongoose')
const Book = require('../models/Book')

const router = express.Router()

router.get('/', async (req, res)=>{
    try {
        // res.send('List of all Books.')

        const result = await Book.find()
        res.send(result);

    } catch (error) {
        res.send("error : " + error)
    }
})

router.post('/', async (req, res)=>{
    const book = new Book({
        Name: req.body.Name,
        Type: req.body.Type,
        Author: req.body.Author,
        Price: req.body.Price
    })
    
    try {
        const newBook = await book.save()
        res.send(newBook)

    } catch (error) {
        res.send("error : " + error)
    }
})

module.exports = router;