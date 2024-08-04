const urlSchema=require("../models/model");
const shortid=require("shortid");
const setData=async (req,res)=>{
    try{
        const data=req.body;
        if(data.url==""){
            res.status(400).json({msg:"Please enter a url"})
        }
        else{
            const check=await urlSchema.findOne({Full_URL:data.url});
            if(!check){
                const response=await urlSchema.create({
                    Full_URL:data.url,
                    Short_URL:shortid.generate(10)
                });
                res.status(200).json({msg:"Successful"});
            }
            else{
                res.status(400).json({msg:"This URL is also registered"});
            }    
        }
        }
    catch(error){
        res.status(400).json({msg:"can't insert data in database"});
    }
}
const getData=async(req,res)=>{
    try{
        const response=await urlSchema.find();
        if(response.length==0){
            res.status(400).json({msg:"empty"});
        }
        else{
            res.status(200).json(response);
        }
    }
    catch(error){
        res.status(400).json({msg:"can't get data"});
    }
}
const redirectionlink=async(req,res)=>{
    try{
        const data=req.params.Short_URL;
        const x=await urlSchema.findOne({Short_URL:data});
        x.click++;
        x.save();
        res.redirect(x.Full_URL);
        console.log("hii");
    }
    catch(error){
        res.status(400).json(error);
    }
}
const increaseClick=async(req,res)=>{
    try{
        const data=req.body;
        const x=await urlSchema.findOne({Full_URL:data.url});
        x.click++;
        x.save();
        res.status(200).json({msg:"hii"});
    }
    catch(error){
        res.status(400).json(error);
    }
}
const dellink=async(req,res)=>{
    try{
        const data=req.body;
        const response=await urlSchema.deleteOne({Full_URL:data.url});
        if(response.acknowledged){
            res.status(200).json({msg:"Successfully deleted"});
        }
        else{
            res.status(400).json({msg:"failed while deleting"});
        }
    }
    catch(error){
        res.status(400).json({msg:"can't delete"});
    }
}
module.exports={setData,getData,redirectionlink,dellink,increaseClick};