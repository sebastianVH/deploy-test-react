const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use("/",(req,res)=>{
    res.send("Server is running");
})

app.use("/test",(req,res)=>{
    res.status(200).json({message: "Server is running desde el deploy!"});
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})