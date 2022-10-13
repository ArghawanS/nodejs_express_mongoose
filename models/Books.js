const { Schema } = require("mongoose")

const mongoose = require("mongoose")

//Define Schema
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        lowercase:true
    },
    //title: String,
    author: String,
    //for assignment user this type
    /*
    price:{
        type:Number,
        require:true,
        min:10,
        max:100
    },
    */
    price: Number,
    published_date: Date

})
// Creating Model from Schema
module.exports = mongoose.model("book", bookSchema)