let express=require("express")
const {connection}=require("./config/db")
const { bookRoute } = require("./route/bookroute")
const cors=require("cors")
const app=express()
require("dotenv").config()

app.use(express.json())
app.use(cors())
app.use(bookRoute)

app.get("/",(req,res)=>{
    res.send("BOOK HOME PAGE")
})






app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("coneected to db")
    }catch(error){
        console.log("error")
    }
    console.log(`server is running ${process.env.PORT}`)
})

