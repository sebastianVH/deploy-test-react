const express = require('express');
const app = express();

app.use(express.json());
app.use("/",(req,res)=>{
    res.send("Server is running");
})

app.use("/test",(req,res)=>{
    res.status(200).json({messago: "Server is running desde el deploy!"});
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})