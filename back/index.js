const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');



app.use(express.json());
app.use(morgan('dev'));
app.use(cors(
    // {
    //     origin: "https://ec2-18-229-125-190.sa-east-1.compute.amazonaws.com",

    // }
));

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'https://ec2-18-229-125-190.sa-east-1.compute.amazonaws.com');
//     next();
//   })

app.use("/",(req,res)=>{
    res.send("Hola desde el back");
})

// app.use("/test",(req,res)=>{
//     res.status(200).json({message: "Server is running desde el deploy!"});
// })

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})