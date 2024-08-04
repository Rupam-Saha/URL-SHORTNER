const mongoose=require("mongoose");
const url=process.env.url;
const connectToDb=async()=>{
    try{
        await mongoose.connect(url);
        console.log("connect Successfully");
    }
    catch(error){
        console.log("error while connecting");
    }
}
module.exports=connectToDb;