const mongoose=require("mongoose")
const bookSchema=mongoose.Schema({
    title:String,
    author:String,
    genre:String,
    description:String,
    price:Number
})

const Bookmodel=mongoose.model("book",bookSchema)


module.exports={Bookmodel}