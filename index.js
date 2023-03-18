const express= require("express");
const app= express();

app.get("/",(req,res)=>{
    res.send("Welcome from server 1")
})

app.listen(8080,()=>{
    console.log("server is running")
})