const express= require("express");
const app= express();

app.get("/",(req,res)=>{
    res.send("Welcome from server 2")
})

app.listen(8800,()=>{
    console.log("server is running")
})