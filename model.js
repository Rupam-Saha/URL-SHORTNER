const mongoose=require("mongoose");
const s=new mongoose.Schema({
    Full_URL:{
        type:String,
        required:true,
        unique:true
    },
    Short_URL:{
        type:String,
        required:true
    },
    click:{
        type:Number,
        required:true,
        default:0
    }
});
const urlSchema=mongoose.model("URL_DATA",s);
module.exports=urlSchema;