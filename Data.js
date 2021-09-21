// require the library
const mongoose = require('mongoose');
const uri = process.env.App_Url;

mongoose.connect(`${uri}`,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(() => console.log("database Connnected"));


// creating Schema for Tasks
const dataSchema = new mongoose.Schema({
    name:String,
    email:String,
    contact:String,
    collage:String,
    branch:String,
    roll:String,
    subject:String,
    topic:String,
    link:String,
    page:String,
});


const Data = mongoose.model('ToDo', dataSchema);

// exporting the Schema
module.exports = Data;