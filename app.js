const Express=require("express")
const Bodyparser=require("body-parser")
const mongoose=require("mongoose")

var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
var bookmodel=mongoose.model("books",new mongoose.Schema(
      {
            getTitle:String,
            getAuthor:String,
            getprice:String
      }
      
))

mongoose.connect("mongodb+srv://mzc_mca:qwerty.1@cluster0.weiqp.mongodb.net/bookDB")

app.post("/api/bookadd",(req,res)=>{
    var getTitle=req.body.getTitle
     var getAuthor=req.body.getAuthor
    var getprice=req.body.getprice
 data={"getTitle":getTitle,"getAuthor":getAuthor,"getprice":getprice}
// var data=req.body

//    res.send(data)
   let mybook=new bookmodel(data)
   mybook.save((error,data)=>{
         if(error)
         {
               res.send({"status":"error","data":error})
         

         }
         else{
               res.send({"status":"success","data":data})
         }
   })
      
})
app.get("/api/viewbooks",(req,res)=>{
      res.send("view all books")
})
app.listen(5001,()=>{
      console.log("running api")
})