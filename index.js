require("dotenv").config();
const express=require("express");
const connectToDb=require("./connection/dbconnect");
const r=require("./router/route");
const app=express();
const cors=require("cors");
const corsOption={
    origin:"http://localhost:5173",
    methods:"GET,POST,HEAD,PATCH,DELETE,PUT",
    Credential:true,
}
app.use(cors(corsOption));
app.use(express.json());
const port =process.env.port;
app.use("",r);
connectToDb().then(()=>{
    app.listen(port,(req,res)=>{
        console.log(`server is running ${port}`);
    })
});