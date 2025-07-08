const express = require('express')
const mongoose = require('mongoose')
const Book = require('../models/Book')

const router = express.Router()

router.get('/', async (req, res)=>{
    try {
        const result = await Book.find()

        res.send(result);
        console.log("All books fetched.")

    } catch (error) {
        res.send("Error : " + error)
        console.log("Error : " + error);
    }
})

router.get('/:id', async (req, res)=>{
    try {
        const bookId = req.params.id;

        const result = await Book.findById(bookId);

        if(result){
            res.send(result);
            console.log("Book found :)");
        }else{
            res.send({Error: "Book not found"})
        }

    } catch (error) {
        res.send("Error : " + error)
        console.log("Error : " + error);
    }
})

router.post('/', async (req, res)=>{
    try {
        const data = req.body;
        const book = new Book(data);

        const newBook = await book.save()

        res.send(newBook)
        console.log("Book added successfully :)")

    } catch (error) {
        res.send("Error : " + error)
        console.log("Error : " + error);
    }
})

router.patch('/:id', async (req, res)=>{
    try {
        const bookId = req.params.id;
        const data = req.body;
    
        const result = await Book.findByIdAndUpdate(bookId, data,{
            new: true,
            runValidators: true,
        });

        if(result){
            res.send(result);
            console.log("Book data updated.");
        }else{
            res.send({Error: "Book not found"})
        }

    } catch (error) {
        res.send("Error : " + error)
        console.log("Error : " + error);
    }
})

router.delete('/:id', async (req, res)=>{
    try {
        const bookId = req.params.id;

        const result = await Book.findByIdAndDelete(bookId);
        
        if(result){
            res.send(result);
            console.log("Book data deleted :) ");
        }else{
            res.send({Error: "Book not found"})
        }

    } catch (error) {
        res.send("Error : " + error)
        console.log("Error : " + error);
    }
})

module.exports = router;