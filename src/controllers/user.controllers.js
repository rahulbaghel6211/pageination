const express =require("express");

const transporter=require("../configs/mail");
const user = require("../models/user.models");

const router=express.Router();
router.get("/",async(req,res)=>{
    try {

        const page =req.query.page||1;
        const pagesize=req.query.pagesize||2;

        const skip=(page-1)*pagesize;

        const user=await user.find().skip(skip).limit(pagesize).lean().exec()

        const totalpages=Math.ceil(await product.find().countDocuments())/pagesize;
        return res.status(200).send(user,totalpages);
        
    } catch (error) {
       return  res.status(500).send({message:error.message})
    }
})

router.post("/",async(req,res)=>{
    try {
       const user=await user.create(req.body);
transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: user.email, // list of receivers
    subject: " Welcome to ABC system ✔", // Subject line
    text: "Please welcome", // plain text body
    html: "<b>Please welcome</b>", // html body
  });

  return res.status(201).send({message:"Please welcome"})
        
    } catch (error) {

        return  res.status(501).send({message:error.message})
        
    }


})
module.exports=router;