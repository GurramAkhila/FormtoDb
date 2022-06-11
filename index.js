const express=require('express');
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost:27017/studata',{ useNewUrlParser: true })
const app=express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine','ejs')
studetailes={
    name:String,
    course:String,
    age:Number,
    email:String
}
const studata=mongoose.model('studata',studetailes)
app.get("/",(req,res)=>{
    res.render('form')
})
app.post('/',(req,res)=>{
    var name=req.body.stuname;
    var course=req.body.course;
    var age=req.body.age;
    var email=req.body.email;
    const item1=new studata({
        name:name,
        course:course,
        age:age,
        email:email
    })
    item1.save()
    res.redirect("/")
})
app.listen(3000,(req,res)=>{
    console.log("connected")
})
