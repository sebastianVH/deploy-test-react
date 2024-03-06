const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: "deploy-backend-six.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",

}));
app.use("/",(req,res)=>{
    res.status(200).json({message: "Server is running!!!"});
})

app.use("/test",(req,res)=>{
    res.status(200).json({message: "Server is running desde el deploy!"});
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})