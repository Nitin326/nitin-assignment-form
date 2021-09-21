const express = require('express');
const multer = require('multer');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
// set up the view engine
app.set('view engine', 'ejs');

// importing the DataBase
const Assignment = require('./Data.js');

// to use encrypted data
app.use(express.urlencoded());

//assets path
app.use('/assets',express.static('assets'));


app.post('/',(req,res) =>{
    const userNotes = new Assignment({
        name:req.body.sname,
        email:req.body.semail,
        contact:req.body.scontact,
        collage:req.body.scollage,
        branch:req.body.sbranch,
        roll:req.body.sroll,
        subject:req.body.ssubject,
        topic:req.body.stopic,
        link:req.body.slink,
        page:req.body.spage, 
    })
    console.log(userNotes);
    userNotes.save();
    res.redirect('/success')
})

app.get('/',(req,res) =>{
    res.render('Home');
})

app.get('/success',(req,res) =>{
    res.render('Success');
})

app.get('/a',(req,res) =>{
    res.render('About');
})

app.listen(`${port}`, () => console.log(`App running at ${port}`));