const express=require("express")
const {Bookmodel}=require("../model/bookmodel")
const bookRoute=express.Router()



bookRoute.post("/Add",async(req,res)=>{
    const payload=req.body
    try{
        const book= new Bookmodel(payload)
        await book.save()
        res.send("Book has been added")

    }catch(error){
        console.log({msg:"error"})
    }
})

bookRoute.get("/allbook",async(req,res)=>{
    try{
        const book=await Bookmodel.find()
        res.send(book)
    }catch(err){
        console.log("error")
        res.send({msg:"error"})
    }
})

bookRoute.delete("/book/:id",async(req,res)=>{
    const id=req.params.id
    try{
        await Bookmodel.findByIdAndDelete({_id:id})
        res.send("book has been delete")
    }catch(err){
        console.log('eroor')
        res.send({msg:"error"})
    }
})

bookRoute.get("/book/sortbypriceinc",async (req,res)=>{
    try{
        const books=await Bookmodel.find().sort({price:1})
        res.send(books)
    }catch(error){
        console.log("error")
        res.send({msg:"error"})
    
    }
})
bookRoute.get("/book/sortbypricedec",async (req,res)=>{
    try{
        const books=await Bookmodel.find().sort({price:-1})
        res.send(books)
    }catch(error){
        console.log("error")
        res.send({msg:"error"})
    
    }
})

bookRoute.get("/book/filterbygenre/:genre",async(req,res)=>{
    const genre=req.params.genre
    try{
        const book=await Bookmodel.find({genre:genre})
        res.send(book)
    
      }  catch(error){
            console.log("error")
            res.send({msg:"error"})
        
        }

})










module.exports={bookRoute}